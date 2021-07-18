import '../App.css';
import { Component } from 'react';
import './home.css'







export default class Home extends Component {
 
    render() {
        return (
          <div className="card m-4" >
          
        
          <div className="card-body text-center">
            <h3 className="card-title">Book List Maker</h3>
            <p className="card-text">Login or Register to have access to your own personal book list!</p>
            <p className="card-text">Head to the nav bar to get started.</p>
          </div>

          <img 
          className="card-img-bottom" 
          src= "/images/freestocks-OfaDD5o8hpk-unsplash.jpg"  
          alt="books" />
        </div>
        )
    }
}
