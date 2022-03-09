import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup() {
    return (
        <PopupWithForm 
        name = "profile"
        title = "Редактировать профиль"
        buttonText ={Сохранить}
        >
        <input type="text" 
        id="name-input" 
        placeholder="Имя" 
        className="popup__input popup__input_type_name"
        name="username" 
        minlength="2" 
        maxlength="40" 
        required />
                        
        <span className="popup__error name-input-error"></span>
                        
        <input type="text" 
        id="job-input" 
        placeholder="О себе" 
        name="userjob"
        className="popup__input popup__input_type_description" 
        minlength="2" 
        maxlength="200" 
        required />
                        
        <span className="popup__error job-input-error"></span>
        </PopupWithForm>
    );
}

export default EditProfilePopup;