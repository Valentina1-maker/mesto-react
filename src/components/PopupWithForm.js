import React from 'react';


function PopupWithForm({ name, title, children, buttonText, isOpen }) {
    return (
    
            <div className={`popup popup_type_${name}`} >
                <div className="popup__content">
                    <h3 className="popup__title">{title}</h3>
                    <button type="button" class="popup__close"></button>
                    <form action="#" className={`popup__form popup__form_${name}`} name="userform" novalidate>
                        {children}
                        <button type="submit" className="popup__submit button">{buttonText}</button>
                    </form>
                </div>
            </div>


            /* <input type="text" id="name-input" placeholder="Имя" className="popup__input popup__input_type_name"
                            name="username" minlength="2" maxlength="40" required />
                        <span className="popup__error name-input-error"></span>
                        <input type="text" id="job-input" placeholder="О себе" name="userjob"
                            className="popup__input popup__input_type_description" minlength="2" maxlength="200" required />
                        <span className="popup__error job-input-error"></span>




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
        </> */
    );
}

export default PopupWithForm;