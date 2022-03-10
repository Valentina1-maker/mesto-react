import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose}) {
    return (
        <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            buttonText={'Сохранить'}
            isOpen ={isOpen}
            onClose = {onClose}
        >

            <input type="url" 
            id="link-avatar" 
            placeholder="Ссылка на картинку" 
            name="avatar"
            className="popup__input popup__input_type_link" 
            required />

            <span className="popup__error link-avatar-error"></span>

        </PopupWithForm>
    )
}

export default EditAvatarPopup;