import React from 'react';


function ImagePopup() {
    return (
        <div className="popup root__popup root__popup_type_image">
        <div className="popup__content popup__content_image">
          <button type="button" className="popup__close"></button>
          <figure>
            <img className="popup__image" src="about:blank" alt="Здесь картинка" />
              <figcaption className="popup__image-description"></figcaption>
          </figure>
        </div>
      </div>
    )
}
export default ImagePopup;