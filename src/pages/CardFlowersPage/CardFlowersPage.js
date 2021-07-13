import React, { useEffect, useState } from 'react';
import './CardFlowersPage.css';

import CardTable from '../../components/CardTable/CardTable';
import CardFlower from '../../components/CardFlower/CardFlower';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import IconButton from '@material-ui/core/IconButton';

import PopUpModal from '../../components/PopUpModal/PopUpModal';

// Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '15%',
    left: '15%',
    right: '15%',
    bottom: '15%',
  },
};

const contentStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const displayedCardStyles = {};

const CardFlowersPage = () => {
  const [magicFlower, flowerNumPicker] = useState(null);
  const [foundCard, cardLocator] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedFlower, selectFlower] = useState(null);

  useEffect(() => {
    flowerNumPicker(Math.floor(Math.random() * 3 + 1));
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const flowerChecker = (guessNum) => {
    const magicDeck = magicFlower;
    if (guessNum === magicDeck) {
      cardLocator(true);
      selectFlower(String(guessNum));
    } else {
      cardLocator(false);
      selectFlower(String(guessNum));
    }
  };

  return (
    <div className="card-flowers-page">
      <CardTable>
        <div className="card-flower-container">
          <div className="flower">
            <CardFlower />
          </div>
          <div className="flower">
            <CardFlower />
          </div>
          <div className="flower">
            <CardFlower />
          </div>
        </div>
        <div className="flower-button-container">
          <IconButton
            style={{ backgroundColor: 'blue', color: 'white' }}
            className="flower-button"
            onClick={() => {
              flowerChecker(1);
              openModal();
            }}
          >
            <ArrowUpwardIcon />
          </IconButton>
          <IconButton
            style={{ backgroundColor: 'blue', color: 'white' }}
            className="flower-button"
            onClick={() => {
              flowerChecker(2);
              openModal();
            }}
          >
            <ArrowUpwardIcon />
          </IconButton>
          <IconButton
            style={{ backgroundColor: 'blue', color: 'white' }}
            className="flower-button"
            onClick={() => {
              flowerChecker(3);
              openModal();
            }}
          >
            <ArrowUpwardIcon />
          </IconButton>
        </div>
      </CardTable>
      <PopUpModal
        isOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
        style={customStyles}
        contentLabel={'POPUP'}
        contentStyles={contentStyles}
        selectedFlower={selectedFlower}
        foundCard={foundCard}
        cardStyles={displayedCardStyles}
      />
    </div>
  );
};

export default CardFlowersPage;
