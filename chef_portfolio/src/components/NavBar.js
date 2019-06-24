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
            <div>
                <nav>
                    <Link to="/recipes">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/registration">Register</Link>
                    <Link to="/contact">Contact Us</Link>
                </nav>

           
            </div>
         );
    }
}
 
export default NavBar;