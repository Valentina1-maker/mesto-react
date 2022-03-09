import React from 'react';


function Main({onEditProfile, onAddPlace, onEditAvatar}) {
    return (
        <main className="content root__content">
        <section className="profile">
          <div className="profile__avatar" onClick={onEditAvatar} ></div>
          <div className="profile__info">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button type="button" onClick={onEditProfile} className="profile__edit-button"></button>
            <p className="profile__description">Исследователь океана</p>
          </div>
          <button type="button" onClick={onAddPlace} className="profile__button"></button>
        </section>
        <section className="places"></section>
      </main>
    );
  }
  
  export default Main;