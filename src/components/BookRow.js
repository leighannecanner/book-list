import React, { Component } from 'react'


export default class BookRow extends Component {
    constructor(props){
        super(props)
        this.state = {
          title: props.book.title,
          author: props.book.author,
          isbn: props.book.isbn
        };    
    }

    onBookSaved(book) {
        book.title = this.state.title
        book.author = this.state.author
        book.isbn = this.state.isbn
        this.props.bookUpdated(book)
    }


    render() {
        return (
            
            <tr>
            <td>{this.props.book.title}</td>
            <td>{this.props.book.author}</td>
            <td>{this.props.book.isbn}</td>
            
            
            <td>
                <i 
                id= "icon" 
                className="bi bi-trash pointer" width="32" 
                onClick={() => this.props.bookRemoved(this.props.book.id)}>
                </i> 
                <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target={"#id" + this.props.book.id}>
                Edit Book
                </button>
                   
              </td>
              
              

                    <div className="modal fade" id={"id"+this.props.book.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={this.props.book.id + "label"} aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={this.props.book.id + "label"}>Edit Book</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <form>
                                    <div className= "mt-4 mb-4">
                                    <label className="form-label">
                                        <strong>Title</strong>
                                        </label>
                                    <input 
                                    value={this.state.title}
                                    onChange ={(e) => this.setState({title: e.target.value})}
                                    type="text" 
                                    className="form-control"/>
                                    </div>

                                    <div className= "mt-4 mb-4">
                                    <label  className="form-label">
                                    <strong>Author</strong>
                                    </label>
                                    <input 
                                    value= {this.state.author}
                                    onChange ={(e) => this.setState({author: e.target.value})}
                                    type="text" 
                                    className="form-control"/>
                                    </div>

                                    <div className= "mt-4 mb-4 text-left">
                                    <label className="form-label">
                                    <strong>ISBN #</strong>
                                    </label>
                                    <input 
                                    value={this.state.isbn}
                                    onChange ={(e) => this.setState({isbn: e.target.value})}
                                    type="text" 
                                    className="form-control"/>
                                    </div>
                                    </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button 
                            onClick={() => this.onBookSaved(this.props.book)}
                            type="button" 
                            className="btn btn-primary" data-bs-dismiss="modal">Save</button>
                        </div>
                        </div>
                    </div>
                    </div>
                 </tr>   

                
            
        )
    }
}
