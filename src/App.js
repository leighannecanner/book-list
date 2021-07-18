import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GuardedRoute from './components/GuardedRoute';
import firebase from './firebase/firebase'

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import BookList2 from './components/BookList2';

import 'bootstrap/js/dist/collapse';

import firebase from './firebase/firebase';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

<<<<<<< HEAD
=======
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import Book from './models/Book';
>>>>>>> 0592c7dbf50a4da7aeb0fad51b3d4b07acc1c037




<<<<<<< HEAD
class App extends Component{
  
  constructor(props) {
    super(props);

    this.auth = firebase.auth(); // maybe need ()

    this.state= {
      user: null,
      loading: true,
    };
  }

  componentDidMount(){
    this.auth.onAuthStateChanged((user) => {
      this.setState({ user: user, loading: false});
    })
  }

=======
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
  
>>>>>>> 0592c7dbf50a4da7aeb0fad51b3d4b07acc1c037



  render () { 

    const { user, loading } = this.state

    return (
  
  <BrowserRouter>
      <Navbar user = {user}/>
      
      {
        loading ?
        <div>Loading</div> :
        <div>
          <Route path='/' exact component={Home} />
          <Route path= '/login' exact component = {Login} />
          <Route path= '/register' exact component= {Register} />
          <GuardedRoute path= '/booklist2' component= {BookList2} user= {user} />
        </div>
      }

      
  </BrowserRouter>
    );  
  }
}


export default App;
