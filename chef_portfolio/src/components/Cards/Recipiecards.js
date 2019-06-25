import React from 'react';
import Card from './card';
import styled from "styled-components";

const Container = styled.div``;

const Recipies = props => {
    return (
        <div>
            {props.cards.map(card =>
                {return <Card key={card.id} card={card} />;
                })}
        </div>
    );
};

export default Recipies;