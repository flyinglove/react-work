import React from 'react';
import * as BooksApi from './BooksAPI'

class ShelfItem extends React.Component {
    updateShelf(e) {
        BooksApi.update(this.props.book, e.target.value)
    }
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail}`}}></div>
                    <div className="book-shelf-changer" onChange={this.updateShelf.bind(this)}>
                        <select defaultValue={this.props.book.shelf}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors && this.props.book.authors.join(',')}</div>
            </div>
        )
    }
}
export default ShelfItem