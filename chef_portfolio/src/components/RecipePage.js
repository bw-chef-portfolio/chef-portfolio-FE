import React from 'react';
import {connect} from 'react-redux';
import {getCard} from '../actions'
import Recipies from './Cards/Recipiecards';
import styled from 'styled-components';

const Page = styled.div``;
const Head = styled.h1`font-family: "Mali", cursive;
  font-weight: bold;`;

class RecipePage extends React.Component {
    componentDidMount(){
        this.props.getCard();
    }
    render() { 
        return ( 
            <Page>
                <Head>Featured Recipes</Head>
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
