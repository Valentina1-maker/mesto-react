import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({isOpen, onClose}) {
    return (
        <PopupWithForm 
        name = "profile"
        title = "Редактировать профиль"
        buttonText ={'Сохранить'}
        isOpen ={isOpen}
        onClose = {onClose}
        >
        <input type="text" 
        id="name-input" 
        placeholder="Имя" 
        className="popup__input popup__input_type_name"
        name="username" 
        minLength="2" 
        maxLength="40" 
        required />
                        
        <span className="popup__error name-input-error"></span>
                        
        <input type="text" 
        id="job-input" 
        placeholder="О себе" 
        name="userjob"
        className="popup__input popup__input_type_description" 
        minLength="2" 
        maxLength="200" 
        required />
                        
        <span className="popup__error job-input-error"></span>
        </PopupWithForm>
    );
}

export default EditProfilePopup;