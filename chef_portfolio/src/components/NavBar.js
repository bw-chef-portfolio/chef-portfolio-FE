import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <div className="container-nav">
                <nav className="nav-bar">
                    <div className="nav-logo">
                        <a href="https://bw-chef-portfolio.netlify.com/index.html">Chef Portfolio</a>
                        <img href="#" alt="stuff"></img>
                    </div>
                <div className="nav-links">
                    <Link to="/recipes">Recipes</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/registration">Register</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
                </nav>
                
            </div>
         );
    }
}
 
export default NavBar;