import React from 'react';
import Card from './card';

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