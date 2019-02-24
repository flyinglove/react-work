import React from 'react'
import ShelfItem from './ShelfItem'
class Shelf extends React.Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.bookList.map((item) => (
                            <li key={item.id}>
                                <ShelfItem book={item}/>
                            </li>
                        ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf
