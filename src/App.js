import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookStatus from './BookStatus'
import SearchBook from './SearchBook'

class BooksApp extends React.Component {
    state = {
        books: []
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        //showSearchPage: false,
        //  bookShelf: ['currentlyReading','wantToRead','read']
    };

    componentDidMount() {
        BooksAPI.getAll().then((book) => {
            this.setState({ books:book })
        })

    }

    changeBookStatus = (book, shelf) =>{
            BooksAPI.get(book.id).then(() => {
                BooksAPI.update(book,shelf).then(() => {
                    book.shelf=shelf;
                    this.setState(state =>({
                        books: state.books.filter((nsbook) => nsbook.id !== book.id).concat([book])
                    }))
                })
            })


    };

    render() {
        return (
            <div className="app">
                <Router>
                    <Switch>
                        <Route exact path='/' render={() =>(
                             <BookStatus
                                books={this.state.books}
                                onChangeShelf={this.changeBookStatus}
                            />
                        )}/>
                        <Route path='/searchbook' render={() =>(
                             <SearchBook
                                books={this.state.books}
                                onChangeShelf={this.changeBookStatus}
                            />
                        )}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default BooksApp
