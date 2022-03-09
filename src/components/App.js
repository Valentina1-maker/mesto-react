import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  
  return (
    <div className="root">
      <Header />
      <Main />
      <Footer />
      
      <div className="popup root__popup root__popup_type_profile">
        <div className="popup__content">
          <h3 className="popup__title">Редактировать профиль</h3>
          <button type="button" class="popup__close"></button>
          <form action="#" class="popup__form popup__form_profile" name="userform" novalidate>
            <input type="text" id="name-input" placeholder="Имя" className="popup__input popup__input_type_name"
              name="username" minlength="2" maxlength="40" required/>
              <span className="popup__error name-input-error"></span>
              <input type="text" id="job-input" placeholder="О себе" name="userjob"
                className="popup__input popup__input_type_description" minlength="2" maxlength="200" required/>
                <span className="popup__error job-input-error"></span>
                <button type="submit" className="popup__submit button">Сохранить</button>
              </form>
            </div>
        </div>

        <div className="popup root__popup root__popup_type_new-card">
          <div className="popup__content">
            <h3 className="popup__title">Новое место</h3>
            <button type="button" className="popup__close  popup__close_type_new-card"></button>
            <form action="#" className="popup__form  popup__form_new-card" name="userform" novalidate>
              <input type="text" id="card-input" placeholder="Название" className="popup__input popup__input_type_name-card"
                name="cardname" minlength="2" maxlength="30" required />
                <span className="popup__error card-input-error"></span>
                <input type="url" id="link-input" placeholder="Ссылка на картинку" name="linkcard"
                  className="popup__input popup__input_type_link" required />
                  <span className="popup__error link-input-error"></span>
                  <button type="submit" className="popup__submit  popup__submit_type_new-card button">Создать</button>
                </form>
              </div>
          </div>

          <div className="popup root__popup root__popup_type_image">
            <div className="popup__content popup__content_image">
              <button type="button" className="popup__close"></button>
              <figure>
                <img className="popup__image" src="about:blank" alt="Здесь картинка" />
                  <figcaption className="popup__image-description"></figcaption>
              </figure>
            </div>
          </div>

          <div className="popup root__popup root__popup_type_avatar">
            <div className="popup__content">
              <h3 className="popup__title">Обновить аватар</h3>
              <button type="button" className="popup__close"></button>
              <form action="#" className="popup__form popup__form_avatar" name="userform" novalidate>
                <input type="url" id="link-avatar" placeholder="Ссылка на картинку" name="avatar"
                  className="popup__input popup__input_type_link" required /> 
                  <span className="popup__error link-avatar-error"></span>
                  <button type="submit" className="popup__submit  popup__submit_type_new-card button">Сохранить</button>
              </form>
            </div>
          </div>

          <div className="popup root__popup root__popup_type_delete">
            <div className="popup__content">
              <h3 className="popup__title">Вы уверены?</h3>
              <button type="button" className="popup__close"></button>
              <form action="#" className="popup__form popup__form_delete" name="userform" novalidate>
                <button type="submit" className="popup__submit  popup__submit_type_delete button">Да</button>
              </form>
            </div>
          </div>

          <template id="place-template">
            <div className="place">
              <img src="about:blank" class="place__img" alt="Здесь картинка" />
                <button className="place__delete-btn"></button>
                <div className="place__text">
                  <h3 className="place__title"></h3>
                  <div className="place__likes">
                    <button type="button" className="place__like"></button>
                    <p className ="place__like-counter">0</p>
                  </div>
                </div>
            </div>
          </template>
        </div>
        );
}

        export default App;



