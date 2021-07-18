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

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';





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
