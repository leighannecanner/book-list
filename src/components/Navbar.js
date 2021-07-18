import React, { Component } from 'react'
import { Link } from 'react-router-dom';


import 'bootstrap/js/dist/collapse';

import firebase from '../firebase/firebase';

export default class Navbar extends Component {
    logout() {
        firebase.auth().signOut();
      }

    render() {

        const { user } = this.props;

        return (

        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" href="#">BookList</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
                </li>

                {
                    user ?
                    <div>
                        <div>
                    <li className="nav-item">
                    <Link className="nav-link" to="/booklist2">My BookList</Link>
                    </li>
                    </div>

                        <li className="nav-item d-flex justify-content-left">
                        <button 
                        className="btn btn-outline-primary mt-2" 
                        onClick={() => this.logout()}>
                            Logout
                        </button>
                        </li>
                    </div> 
                    :
                <div>
                    <div>
                    <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    </div>
                    <div>
                    <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    </div>
                </div>
                }


                </ul>
            </div>
            </div>
        </nav>

            
        )
    }
}
