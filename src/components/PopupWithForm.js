import React from "react";

function PopupWithForm({ name, title, children, buttonText, isOpen, onClose }) {
  return (
    <div
      className={`popup popup_type_${name} ${isOpen ? "popup_is-opened" : ""}`}
    >
      <div className="popup__content">
        <h3 className="popup__title">{title}</h3>
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
        ></button>
        <form
          action="#"
          className={`popup__form popup__form_${name}`}
          name="userform"
          noValidate
        >
          {children}
          <button type="submit" className="popup__submit button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
