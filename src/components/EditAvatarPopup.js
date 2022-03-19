import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const counterRef = React.useRef(0);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: counterRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText={"Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      handleSubmit={handleSubmit}
    >
      <input
        type="url"
        id="link-avatar"
        placeholder="Ссылка на картинку"
        name="avatar"
        className="popup__input popup__input_type_link"
        defaultValue={""}
        ref={counterRef}
        required
      />

      <span className="popup__error link-avatar-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
