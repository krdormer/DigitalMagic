import React, { useEffect, useState } from 'react';
import GameTag from '../../components/GameTag/GameTag';

import twentyOneCardCascadeImage from '../../assets/twenty_one_card_cascade.png';
import { Animated } from 'react-animated-css';

import {
  HomePageStyles,
  HomePageTitleGreeting,
  HomePageText,
  GameButtonContainer,
} from './HomePage.styles';

const HomePage = () => {
  const [isVisibleFirst, setVisibilityFirst] = useState(false);
  const [isVisibleSecond, setVisibilitySecond] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setVisibilityFirst(true);
    }, 2000);
    setInterval(() => {
      setVisibilitySecond(true);
    }, 3500);
  }, []);

  return (
    <HomePageStyles className="homepage-title">
      <HomePageTitleGreeting>
        <Animated
          animationIn="fadeInDown"
          isVisible={true}
          animationInDuration={2000}
        >
          Welcome to...
        </Animated>
        <Animated
          animateOnMount={false}
          animationIn="fadeInUp"
          isVisible={isVisibleFirst}
        >
          DigitalMagic
        </Animated>
      </HomePageTitleGreeting>
      <HomePageText className="homepage-text">
        <Animated
          animateOnMount={false}
          animationIn="fadeInUp"
          isVisible={isVisibleSecond}
        >
          Please select a game below when you are ready to begin!
        </Animated>
      </HomePageText>
      <GameButtonContainer>
        <GameTag
          route={'/card_Cascade'}
          img={twentyOneCardCascadeImage}
          altText={'21 Card Cascade Game'}
        />
      </GameButtonContainer>
    </HomePageStyles>
  );
};

export default HomePage;
