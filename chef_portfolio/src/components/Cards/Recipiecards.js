import React from 'react';
import Card from './card';
import styled from "styled-components";

const Container = styled.div`display: flex;
  justify-content: center;
  flex-flow: wrap;`;

const Recipies = props => {
    return (
        <Container>
            {props.cards.map(card =>
                {return <Card key={card.id} card={card} />;
                })}
        </Container>
    );
};

export default Recipies;