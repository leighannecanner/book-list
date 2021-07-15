import './App.css';
import { Component } from 'react';

import firebase from './firebase/firebase';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import AddBook from './components/AddBook';
import BookList from './components/BookList';
import Book from './models/Book';


class App extends Component{

  constructor (props){
    super(props);

    this.db=firebase.firestore();
    // this.db.collection("books").get().then((data)=> console.log(data))

    // let booksString = localStorage.getItem('books');
    // booksString = booksString ? booksString : '[]' ;
    // const books = JSON.parse(booksString)

    // this.state = {books: books};

    this.state={
      books: []
    };  
  }
  async componentDidMount(){
    this.fetchBooks();
  }

  async fetchBooks(){
    try{
      const snapshot = await this.db.collection('books').get();
      const books = snapshot.docs.map(doc => Book.fromDocument(doc));
      this.setState({books: books});
    }catch(err){
    console.log(err)  
    }
  }
  saveBooksState(books) {
    this.setState({books: books});
    localStorage.setItem('books', JSON.stringify(books));
  }

  async onBookCreated(book){
    const bookRef = this.db.collection("books").doc()
    book.id = bookRef.id
    bookRef.set({
      title: book.title,
      author: book.author,
      isbn: book.isbn
    })
    this.state.books.push(book);
    this.saveBooksState(this.state.books)
  }

  async onBookRemoved(bookId){
    await this.db.collection('books').doc(bookId).delete()
    const updatedBookArr = this.state.books.filter(book => book.id !== bookId)
    this.saveBooksState(updatedBookArr);
  }

  async onBookUpdated(book){
    await this.db.collection('books').doc(book.id).update({
      title: book.title,
      author: book.author,
      isbn: book.isbn
    })
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
