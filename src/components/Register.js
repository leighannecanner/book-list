import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../firebase/firebase';


export default class Register extends Component {
    constructor(props) {
        super(props);
    
        this.auth = firebase.auth();
    
        this.state = {
          email: '',
          password: ''
        };
      }

    async onRegister(e) {
        e.preventDefault();

        try{
            const { email, password} = this.state;
            const userCredential = await this.auth.createUserWithEmailAndPassword(email,password)
            console.log(userCredential.user);
            this.props.history.push('/')
        }catch(err) {
            console.log(err)

        }
    }
    

    render() {
        const { email, password } = this.state;

        return (
            <div className="container mt-5">
                <div>
                    
                    <h1 className="d-flex justify-content-center">Register</h1> 
                </div>      
            <form onSubmit={(e) => this.onRegister(e)}>
                <div class="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input 
                    value={email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                    type="email" 
                    className="form-control"
                    placeholder="name@example.com"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" className="form-label" placeholder="minimum 6 characters">Password</label>
                    <input 
                    value={password}
                    onChange={(e) => this.setState({ password: e.target.value })}
                    type="password" 
                    className="form-control"
                    placeholder="minimum 6 characters" />
                </div>
                <div className="mb-3 d-flex justify-content-end">
                <button type="submit" className="btn btn-primary mt-3 px-5"> Register </button>
                </div>
                <div className="mb-3 d-flex justify-content-end">
                <Link  to='/login'>Already have an account? Login here</Link>
                </div>
                
            </form>
        </div> 
        )
    }
}
