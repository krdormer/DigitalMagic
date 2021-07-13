import React from 'react';
import Modal from 'react-modal';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { cardDeckArray } from '../../data/cardData';

const PopUpModal = ({
  isOpen,
  style,
  contentLabel,
  contentStyles,
  selectedFlower,
  foundCard,
  cardStyles,
  openModal,
  closeModal,
  featureCard,
  titleText,
  bodyText,
}) => {
  return (
    <Modal isOpen={isOpen} style={style} contentLabel={contentLabel}>
      {!featureCard ? (
        <div style={contentStyles}>
          <h3>{`You have selected flower ${selectedFlower}`}</h3>
          <h3>{`${
            foundCard === true
              ? 'This was definitely your card!'
              : "But.. I don't think this is your card."
          }`}</h3>
          {foundCard === true ? (
            <div style={cardStyles}>
              <img src={cardDeckArray[0].image} alt="" />
            </div>
          ) : (
            <div style={cardStyles}>
              <img src={cardDeckArray[1].image} alt="" />
            </div>
          )}
          <IconButton onClick={() => closeModal()}>
            <CloseIcon />
          </IconButton>
        </div>
      ) : (
        <div style={contentStyles}>
          <h3>{titleText}</h3>
          <p>{bodyText}</p>
          <IconButton onClick={() => closeModal()}>
            <CloseIcon />
          </IconButton>
        </div>
      )}
    </Modal>
  );
};

export default PopUpModal;
