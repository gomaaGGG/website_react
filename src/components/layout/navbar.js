import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
const Navbarlink =({to,label})=>(

    <li className="nav-item">
    <NavLink to={to}    activeClassName="active"  className="nav-link">{label}</NavLink>
     </li>
)





class navbar extends Component {
  


    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand"  >Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                  <Navbarlink to="/login" label="login"/>
                  <Navbarlink to="/signup" label="signup"/>
                  <Navbarlink to="/users" label="users"/>
                  <Navbarlink to="/about" label="about"/>
              </ul>
              
            </div>
          </nav>


         );
    }
}
 
export default navbar;





