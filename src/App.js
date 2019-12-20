import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layout/navbar';


import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/routes/login';
import Signup from './components/routes/signup';


class App extends Component {
  state = {  }
  render() { 
    return (  
      <Router>
        <div>
      <Navbar />
      <Route path="/login"  >
        <Login />
      </Route>
      <Route path="/signup" >
      <Signup />
        </Route>
        </div>
      </Router>
    );
  }
}
 
export default App;