import React, { useEffect, useState } from "react";
import Api from "../utils/Api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  // const [userName, setUserName] = useState("");
  // const [userDescription, setUserDescription] = useState("");
  // const [userAvatar, setUserAvatar] = useState("");
  const [cards, setUserCards] = useState([]);

  const userInfo = React.useContext(CurrentUserContext);

  // useEffect(() => {
  //   Api.getUserInfo()
  //     .then((res) => {
  //       setUserName(res.name);
  //       setUserDescription(res.about);
  //       setUserAvatar(res.avatar);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  useEffect(() => {
    Api.getInitialCards()
      .then((res) => {
        setUserCards(res);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === userInfo._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    Api.toggleLike(card._id, !isLiked).then((newCard) => {
        setUserCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
}

  return (
    <main className="content root__content">
      <section className="profile">
        <div
          className="profile__avatar"
          onClick={onEditAvatar}
          style={{ backgroundImage: `url(${userInfo.avatar})` }}
        ></div>
        <div className="profile__info">
          <h1 className="profile__title">{userInfo.name}</h1>
          <button
            type="button"
            onClick={onEditProfile}
            className="profile__edit-button"
          ></button>
          <p className="profile__description">{userInfo.about}</p>
        </div>
        <button
          type="button"
          onClick={onAddPlace}
          className="profile__button"
        ></button>
      </section>
      <section className="places">
        {cards.map((card) => (
          <Card card={card} key={card._id} onCardClick={onCardClick} onCardLike={handleCardLike} />
        ))}
      </section>
    </main>
  );
}

export default Main;
