/**
 * Created by rozer on 3/4/2018.
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BookAPI from './BooksAPI'
import Book from './Book'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

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
            this.setState({ query: query.trim() });
            BookAPI.search(query)
        }
    };
    
    render() {

        const { query } = this.state;
        const { books } = this.props;

        let showingBook
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i');
            showingBook = books.filter((book) => match.test( book.authors ) || match.test( book.title ) );
            showingBook.sort(sortBy('title'));
        }else {
            showingBook = [];
        }



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
                        {showingBook.map((book) => (
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