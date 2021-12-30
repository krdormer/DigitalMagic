import React, { useEffect, useState } from 'react';
import GameTag from '../../components/GameTag/GameTag';

import twentyOneCardCascadeImage from '../../assets/twenty_one_card_cascade.png';
import { Animated } from 'react-animated-css';

import styles from './styles.module.scss'

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
    <div className={styles.homepage}>
      <h1 className={styles.homepageTitle}>
        <Animated
          animationIn="fadeInDown"
          isVisible={true}
          animationInDuration={2000}
        >
          Welcome to
        </Animated>
        <Animated
          animateOnMount={false}
          animationIn="fadeInUp"
          isVisible={isVisibleFirst}
        >
          DigitalMagic
        </Animated>
      </h1>
      <p className={styles.homepageText}>
        <Animated
          animateOnMount={false}
          animationIn="fadeInUp"
          isVisible={isVisibleSecond}
        >
          Please select a game below when you are ready to begin!
        </Animated>
      </p>
      <div className={styles.gameIconContainer}>
        <GameTag
          route={'/card_Cascade'}
          img={twentyOneCardCascadeImage}
          altText={'21 Card Cascade Game'}
        />
      </div>
    </div>
  );
};

export default HomePage;
