import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
const Slide = styled.div``;
const Head = styled.h1``;
const Ingredient = styled.li``;
const Name = styled.h1``;
const Location = styled.h2``;

const Card = (props) => {
    return(
        <Slide key={props.card.id}>
            <Name>{props.card.chef_name}</Name>
            <Location>{props.card.chef_location}</Location>
            <Head>{props.card.recipie_title}</Head>
            <img src={props.card.item_photo} alt="pictures of food" className="Image"/>           
            <Ingredient>{props.card.item_ingredients}</Ingredient>
        </Slide>
    );
};

export default Card;