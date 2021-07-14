import React, { Component } from 'react'
import Book from '../models/Book';


export default class addBook extends Component {

  constructor(props){
    super(props)
    this.state = {
      title: '',
      author: '',
      isbn: ''
    };
  }
  onAddBook() {
    const book = new Book(this.state.title, this.state.author, this.state.isbn);
    this.props.createBook(book);
    this.setState({title: '', author:'', isbn: ''})
    
  }
    

  
  render() {
        return (
            <div>
              <div className="mt-3 card container border-bottom-0 rounded-0">
                <h2 className="mt-4">Add Book:</h2>
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

                <div className="d-grid gap-2 mb-4">
                  <button onClick={() => this.onAddBook()}
                  className="btn btn-outline-primary" 
                  type="button">
                    Submit
                  </button>
                </div>
            </div>
                    
                
                
            </div>
        )
    }
}
