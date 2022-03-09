import React from 'react';


function PopupWithForm({ name, title, children, buttonText, isOpen }) {
    return (
    
            <div className={`popup popup_type_${name} ${isOpen ? "popup_is-opened" : ""}`} >
                <div className="popup__content">
                    <h3 className="popup__title">{title}</h3>
                    <button type="button" className="popup__close"></button>
                    <form action="#" className={`popup__form popup__form_${name}`} name="userform" novalidate>
                        {children}
                        <button type="submit" className="popup__submit button">{buttonText}</button>
                    </form>
                </div>
            </div>


            





           

        //     <div className="popup root__popup root__popup_type_delete">
        //         <div className="popup__content">
        //             <h3 className="popup__title">Вы уверены?</h3>
        //             <button type="button" className="popup__close"></button>
        //             <form action="#" className="popup__form popup__form_delete" name="userform" novalidate>
        //                 <button type="submit" className="popup__submit  popup__submit_type_delete button">Да</button>
        //             </form>
        //         </div>
        //     </div>
        // </> */
    );
}

export default PopupWithForm;