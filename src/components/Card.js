import React from 'react';

function Card({ card, onCardClick }) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="place">
      <img src={card.link}
        className="place__img"
        onClick={handleClick}
        alt={card.name} />
      <button className="place__delete-btn"></button>
      <div className="place__text">
        <h3 className="place__title">{card.name}</h3>
        <div className="place__likes">
          <button type="button" className="place__like"></button>
          <p className="place__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;