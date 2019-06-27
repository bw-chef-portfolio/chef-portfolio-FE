import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {getCard} from '../actions'
import Recipies from './Cards/Recipiecards';
import styled from 'styled-components';

const Page = styled.div``;
const Head = styled.h1``;

class RecipePage extends React.Component {
    componentDidMount(){
        this.props.getCard();
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
                <Recipies cards={this.props.cards} />
            </Page>

                
         );
    }
}
const mapStateToProps = (state) => {
    return{
        cards:state.cardReducer.cards,
        fetching:state.cardReducer.fetching,
        error:state.cardReducer.error
        
    }
}
 
export default connect(mapStateToProps,{getCard}) (RecipePage);