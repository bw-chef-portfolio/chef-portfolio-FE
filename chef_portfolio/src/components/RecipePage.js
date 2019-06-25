import React from 'react';
import { Link } from 'react-router-dom';
import Recipies from './Cards/Recipiecards';
import styled from 'styled-components';

const Page = styled.div``;
const Head = styled.h1``;

class RecipePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <Page>
                <Head>Featured Recipies</Head>
                {/* <nav>
                    <Link to="/recipes">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/registration">Register</Link>
                    <Link to="/contact">Contact Us</Link>
                </nav> */}
                <Recipies />
            </Page>

                
         );
    }
}
 
export default RecipePage;