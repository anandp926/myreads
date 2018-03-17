/**
 * Created by rozer on 3/4/2018.
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BookAPI from './BooksAPI'
import Book from './Book'

class SearchBook extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    };

    state = {
        query: '',
        books: []
    };

    updateQuery = (query) =>{
        if(!query){
            this.setState({query:'',books:[]})
        }else{
            BookAPI.search(query).then((books) => {
                if(books.error){
                    books=[]
                }
                books.map(book => (this.props.books.filter((bk) => bk.id === book.id).map(bk => book.shelf = bk.shelf)))
                this.setState({books})
            })
        }
    };
    
    render() {
       const { query } = this.state;
       return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search" >Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                         NOTES: The search from BooksAPI is limited to a particular set of search terms.
                         You can find these search terms here:
                         https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                         However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                         you don't find a specific author or title. Every search is limited by search terms.
                         */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.map((book) => (
                            <Book
                                onChangeShelf={this.props.onChangeShelf}
                                key={book.id}
                                book={book}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBook