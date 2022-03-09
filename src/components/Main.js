import React from 'react';


function Main() {

  function handleEditAvatarClick() {
    document.querySelector('profile__edit-button').classList.remove('popup_is-opened');
  }


    return (
        <main className="content root__content">
        <section className="profile">
          <div className="profile__avatar"></div>
          <div className="profile__info">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button type="button" onClick={handleEditAvatarClick} className="profile__edit-button"></button>
            <p className="profile__description">Исследователь океана</p>
          </div>
          <button type="button" className="profile__button"></button>
        </section>
        <section className="places"></section>
      </main>
    );
  }
  
  export default Main;