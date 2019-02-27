import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Link, Route} from 'react-router-dom'
import Shelf from './Shelf'
import SearchPage from './SearchPage'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    booksList: []
  }
  getAll = () => {
    BooksAPI.getAll().then((res) => {
      let ret = []
      res.forEach((item) => {
        let index = ret.findIndex((shelf) => {
          return shelf.title === item.shelf
        })
        if (index > -1) {
          ret[index].books.push(item)
        } else {
          ret.push({
              title: item.shelf,
              books: [item]
          })
        }
      })
      this.setState({
          booksList: ret
      })
      console.log(ret)
    })
  }
  updateShelf = (book, e) => {
    BooksAPI.update(book, e.target.value).then(() => {
      this.getAll()
    })
  }
  componentDidMount() {
    this.getAll()
  }
  render() {
    return (
      <div className="app">
          <Route path="/search" render={() => (
              <SearchPage booksList={this.state.booksList} updateShelf={this.updateShelf}/>
          )} />
          <Route path="/" exact render={() => (
              <div className="list-books">
                  {
                    this.state.booksList.map((item) => (
                        <Shelf updateShelf={this.updateShelf} key={item.title} shelfName={item.title} bookList={item.books}/>
                    ))
                  }
                  <Link to='/search'>
                      <div className="open-search">
                          <button>Add a book</button>
                      </div>
                  </Link>
              </div>
          )}/>
      </div>
    )
  }
}

export default BooksApp
