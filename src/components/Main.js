import React, { useEffect, useState } from "react";
import Api from "../utils/Api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setUserCards] = useState([]);

  useEffect(() => {
    Api.getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    Api.getInitialCards()
      .then((res) => {
        setUserCards(res);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="content root__content">
      <section className="profile">
        <div
          className="profile__avatar"
          onClick={onEditAvatar}
          style={{ backgroundImage: `url(${userAvatar})` }}
        ></div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button
            type="button"
            onClick={onEditProfile}
            className="profile__edit-button"
          ></button>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          type="button"
          onClick={onAddPlace}
          className="profile__button"
        ></button>
      </section>
      <section className="places">
        {cards.map((card) => (
          <Card card={card} key={card._id} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
