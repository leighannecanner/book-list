import './App.css';
import { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import AddBook from './components/AddBook';
import BookList from './components/BookList';


class App extends Component{

  constructor (props){
    super(props);

    let booksString = localStorage.getItem('books');
    booksString = booksString ? booksString : '[]' ;
    const books = JSON.parse(booksString)

    this.state = {books: books};

    //this.state={
      //books: []
    //};
  }

  saveBooksState(books) {
    this.setState({books: books});
    localStorage.setItem('books', JSON.stringify(books));
  }

  onBookCreated(book){
    this.state.books.push(book);
    this.saveBooksState(this.state.books)
  }

  onBookRemoved(bookId){
    const updatedBookArr = this.state.books.filter(book => book.id !== bookId)
    this.saveBooksState(updatedBookArr);
  }

  onBookUpdated(book){
    const updatedBookArr = this.state.books.map(b => b.id === book.id ? book : b)
      
    this.saveBooksState(updatedBookArr);
  }
  





  render () { 
    return (
    <div className="App">
      <AddBook 
      createBook={(book) => this.onBookCreated(book)}
      />
      <BookList 
      books = {this.state.books}
      bookRemoved = {(bookId => this.onBookRemoved(bookId))}
      bookUpdated = {(book => this.onBookUpdated(book))}
      />

    </div>
    );  
  }
}


export default App;
