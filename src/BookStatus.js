/**
 * Created by rozer on 3/4/2018.
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import PropTypes from 'prop-types'

class BookStatus extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    };

    render() {
        const bookShelf = ["currentlyReading","wantToRead","read"];
        const bshelf = ["Currently reading","Want to read","Read"];
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                {bookShelf.map((shelf,index) => {
                    return(
                        <div key={index} className="list-books-content">
                            <div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">{bshelf[index]}</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            {this.props.books.filter(book => book.shelf === shelf).map(book => (
                                                <Book
                                                    onChangeShelf={this.props.onChangeShelf}
                                                    key={book.id}
                                                    book={book}
                                                />
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="open-search">
                    <Link to="/searchbook">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BookStatus