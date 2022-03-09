import React from 'react';
import PopupWithForm from "./PopupWithForm";

function AddCardPopup() {
    return (
        <PopupWithForm
           name="new-card"
           title="Новое место"
           buttonText={Сохранить}
           isOpen ={isOpen}
        > 
                        
                        
        <input type="text" 
        id="card-input" 
        placeholder="Название" 
        className="popup__input popup__input_type_name-card"
        name="cardname" 
        minlength="2" 
        maxlength="30" required />

                        
        <span className="popup__error card-input-error"></span>

        <input type="url" 
        id="link-input" 
        placeholder="Ссылка на картинку" 
        name="linkcard"
        className="popup__input popup__input_type_link" required />

        <span className="popup__error link-input-error"></span>

        </PopupWithForm>

    )
}

export default AddCardPopup;