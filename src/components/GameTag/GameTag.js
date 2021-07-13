import React from 'react';
import { withRouter } from 'react-router';
import { GameTagImageStyles, GameTagStyles } from './GameTag.styles';

const GameTag = ({ img, altText, history, route }) => (
    <GameTagStyles className='game-tag' onClick={() => history.push(`${route}`)}>
        <GameTagImageStyles className='game-tag-img' src={img} alt={altText} />
    </GameTagStyles>
);

export default withRouter(GameTag);