import React from 'react';
import styled from 'styled-components';
const Slide = styled.div``;
const Head = styled.h3``;
const Ingredient = styled.p``;
const Name = styled.h3``;
const Location = styled.h4``;
const ChefCollection = styled.div`display: flex;
  justify-content: space-evenly;`
const ChefCard = styled.div` border: 2px solid red;
  text-align: center;
  border-radius: 10px;
  margin: 25px;
  height: 400px;
  width: 500px;
  padding-top: 50px;
  background-color: seashell;
  font-family: "Mali", cursive;
  font-weight: bold;`

const Card = (props) => {
    return(
        <ChefCollection>
            <ChefCard>
        <Slide key={props.card.id}>
            <img src={props.card.item_photo} alt="pictures of food" className="Image"/>  
            <Name>Chef Name: {props.card.chef_name}</Name>
            <Location>Location: {props.card.chef_location}</Location>
            <Head>Recipe Name: {props.card.recipe_title}</Head>
                     
            <Ingredient>Ingredients: {props.card.item_ingredients}</Ingredient>
        </Slide>
        </ChefCard>
        </ChefCollection>
    );
};

export default Card;