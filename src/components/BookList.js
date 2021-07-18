import React, { Component } from 'react'
import './BookList.css';
import BookRow from './BookRow'


export default class bookList extends Component {



render() {
    return (
        <div className="mb-3 card container border-top-0 rounded-0">
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>ISBN #</th>
                        <th className="text-align-right"> </th>
                    </tr>
                </thead>
                <tbody>
                  {
                  this.props.books.map(book => {
                  return <BookRow
                  key = {book.id}
                  book = {book}
                  bookRemoved = {this.props.bookRemoved}
                  bookUpdated = {this.props.bookUpdated}
                  />
                    
                  })
                  }
                  
                </tbody>
            </table>
      
            
        </div>
    )
}
}
