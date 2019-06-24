import React from 'react';
import { Link } from 'react-router-dom'

class RecipePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <div>
                {/* <nav>
                    <Link to="/recipes">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/registration">Register</Link>
                    <Link to="/contact">Contact Us</Link>
                </nav> */}

                <h1>Recipe Page</h1>
                <div>
                    <h3>Chicken Soup</h3>
                    <p>(Image)</p>
                    <p>Recipe Information</p>
                </div>
                <div>
                    <h3>Chicken Soup</h3>
                    <p>(Image)</p>
                    <p>Recipe Information</p>
                </div>
                <div>
                    <h3>Chicken Soup</h3>
                    <p>(Image)</p>
                    <p>Recipe Information</p>
                </div>
            </div>
         );
    }
}
 
export default RecipePage;