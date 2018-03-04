/**
 * Created by rozer on 3/4/2018.
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class BookStatus extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    };


    render() {
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.props.books.filter(data => data.shelf === "currentlyReading").map(data => (
                                        <li key={data.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: `url(${data.imageLinks.thumbnail})` }}></div>
                                                    <div className="book-shelf-changer">
                                                        <select value={data.shelf} onChange={(event) => this.props.onChangeShelf(data,event.target.value)}>
                                                            <option value="none" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{data.title}</div>
                                                <div className="book-authors">{data.authors[0]}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.props.books.filter(data => data.shelf === "wantToRead").map(data => (
                                        <li key={data.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: `url(${data.imageLinks.thumbnail})` }}></div>
                                                    <div className="book-shelf-changer">
                                                        <select value={data.shelf} onChange={(event) => this.props.onChangeShelf(data,event.target.value)}>
                                                            <option value="none" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{data.title}</div>
                                                <div className="book-authors">{data.authors[0]}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.props.books.filter(data => data.shelf === "read").map(data => (
                                        <li key={data.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: `url(${data.imageLinks.thumbnail})` }}></div>
                                                    <div className="book-shelf-changer">
                                                        <select value={data.shelf} onChange={(event) => this.props.onChangeShelf(data,event.target.value)}>
                                                            <option value="none" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{data.title}</div>
                                                <div className="book-authors">{data.authors[0]}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/searchbook">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BookStatus