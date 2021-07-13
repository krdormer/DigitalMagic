import React, { useEffect, useState } from 'react';
import CardTable from '../../components/CardTable/CardTable';
import Card from '../../components/Card/Card';
// import PopUpModal from '../../components/PopUpModal/PopUpModal';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import IconButton from '@material-ui/core/IconButton';
import PopUpModal from '../../components/PopUpModal/PopUpModal';

import { withRouter } from 'react-router-dom';

import './CardCascadePage.styles.css';

import { cardDeckArray } from '../../data/cardData';

import {
  cardDequeuer,
  cardQueueCreator,
  compareCardArrays,
} from '../../controllers/cardQueueController';

const cardStyles = {
  width: '100px',
  height: '150px',
  marginBottom: '-25%',
  marginLeft: '0',
  marginRight: '0',
  marginTop: '0',
  padding: '0',
  justifySelf: 'stretch',
};

const customStyles = {
  content: {
    top: '15%',
    left: '15%',
    right: '15%',
    bottom: '15%',
    backgroundColor: '#CAF0F8',
    color: '#03045E',
  },
};

const contentStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.5em',
  width: '80%',
  margin: 'auto',
  textAlign: 'center',
  marginTop: '10%',
};

const CardCascadePage = ({ history }) => {
  const [cardDeck, updateCardDeck] = useState(cardDeckArray);
  const [columnSelectionCount, incrementColCount] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, [columnSelectionCount]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const columnSelectionHandler = (column) => {
    let counter;
    switch (column) {
      case 'COL_ONE':
        counter = 0;
        break;
      case 'COL_TWO':
        counter = 1;
        break;
      case 'COL_THREE':
        counter = 2;
        break;
      default:
        return;
    }
    const selectedCardsArray = [];
    while (counter < cardDeck.length) {
      selectedCardsArray.push(cardDeck[counter]);
      counter += 3;
    }
    // Enqueues and returns a queue
    const cardQueue = cardQueueCreator(selectedCardsArray);
    // Dequeues and returns an array
    const dequeuedCardsArray = cardDequeuer(cardQueue);
    // Takes both arrays and sorts selected cards to beginning
    const sortedArray = compareCardArrays(dequeuedCardsArray, cardDeck);
    // Set State
    incrementColCount(columnSelectionCount + 1);
    updateCardDeck(sortedArray);
  };

  return (
    <div className="card-game-page">
      {columnSelectionCount === 0 ? (
        <PopUpModal
          isOpen={modalIsOpen}
          openModal={openModal}
          closeModal={closeModal}
          style={customStyles}
          contentLabel={'POPUP'}
          contentStyles={contentStyles}
          featureCard={true}
          titleText="This is 21-Card-Cascade!"
          bodyText="When you close this screen, look over the cards on the table and
            mentally select one. Make sure that you don't click on it, say it
            out loud, or otherwise suggest you have found it. Instead, click the
            button underneath the column your card is in and more instructions
            will follow."
        />
      ) : null}
      {columnSelectionCount === 1 ? (
        <PopUpModal
          isOpen={modalIsOpen}
          openModal={openModal}
          closeModal={closeModal}
          style={customStyles}
          contentLabel={'POPUP'}
          contentStyles={contentStyles}
          featureCard={true}
          titleText="Alakazam!"
          bodyText="The cards have shifted.. Where is your card now?"
        />
      ) : null}
      {columnSelectionCount === 2 ? (
        <PopUpModal
          isOpen={modalIsOpen}
          openModal={openModal}
          closeModal={closeModal}
          style={customStyles}
          contentLabel={'POPUP'}
          contentStyles={contentStyles}
          featureCard={true}
          titleText="You've got this down."
          bodyText="Which column is it in this time?"
        />
      ) : null}
      {columnSelectionCount === 3 ? (
        <PopUpModal
          isOpen={modalIsOpen}
          openModal={openModal}
          closeModal={closeModal}
          style={customStyles}
          contentLabel={'POPUP'}
          contentStyles={contentStyles}
          featureCard={true}
          titleText="That should be plenty to allow my magic to work."
          bodyText="At the bottom of the table you will see a button. Click it when you are ready, and I will take these cards and make some.. flowers.. for you."
        />
      ) : null}
      <CardTable>
        <div className="card-game-board">
          <div className="card-container">
            {cardDeck.map(({ code, images, ...otherCardProps }) => (
              <Card
                key={code}
                img={images.png}
                cardStyles={cardStyles}
                {...otherCardProps}
              />
            ))}
          </div>
          {columnSelectionCount < 3 ? (
            <div className="game-board-buttons">
              <IconButton
                style={{ backgroundColor: '#00B4D8', color: '#03045E' }}
                className="game-button"
                onClick={() => columnSelectionHandler('COL_ONE')}
              >
                <ArrowUpwardIcon />
              </IconButton>
              <IconButton
                style={{ backgroundColor: '#0096C7', color: '#03045E' }}
                className="game-button"
                onClick={() => columnSelectionHandler('COL_TWO')}
              >
                <ArrowUpwardIcon />
              </IconButton>
              <IconButton
                style={{ backgroundColor: '#0096C7', color: '#03045E' }}
                className="game-button"
                onClick={() => columnSelectionHandler('COL_THREE')}
              >
                <ArrowUpwardIcon />
              </IconButton>
            </div>
          ) : columnSelectionCount === 3 ? (
            <div className="final-button-container">
              <IconButton
                style={{ backgroundColor: '#0096C7', color: 'white' }}
                className="final-game-button"
                onClick={() => history.push('/card_flowers')}
              >
                Let's Proceed!
              </IconButton>
            </div>
          ) : null}
        </div>
      </CardTable>
    </div>
  );
};

export default withRouter(CardCascadePage);
