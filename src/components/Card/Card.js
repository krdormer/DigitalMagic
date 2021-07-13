import React from 'react';

const Card = ({ cardStyles, img, ...otherCardProps }) => (
    <img 
        style={cardStyles} 
        src={img} 
        alt={`${otherCardProps.value} of ${otherCardProps.suit}`} />
);

export default Card;