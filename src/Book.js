/**
 * Created by rozer on 3/15/2018.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Book extends Component{
    static propTypes = {
        onChangeShelf: PropTypes.func.isRequired
    };

    render(){
        const {book}=this.props;
        return(
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{backgroundImage: `url(${book.imageLinks.thumbnail})`, width: 128, height: 174 }}></div>
                        <div className="book-shelf-changer">
                            <select value={book.shelf} onChange={(event) => this.props.onChangeShelf(book,event.target.value)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors[0]}</div>
                </div>
            </li>
        )
    }
}

export default Book
