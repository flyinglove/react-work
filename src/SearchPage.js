import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ShelfItem from './ShelfItem'
class SearchPage extends React.Component {
    state = {
        booksList: []
    }
    search(e) {
        let val = e.target.value;
        BooksAPI.search(val).then(res => {
            console.log(res, this)
            this.setState({
                booksList: res && res.length ? res : []
            })
        })
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text" placeholder="Search by title or author" onChange={this.search.bind(this)}/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.booksList && this.state.booksList.map((item) => (
                            <ShelfItem getAll={this.props.getAll} key={item.id} book={item}/>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage
