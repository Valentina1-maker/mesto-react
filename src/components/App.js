import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {useState} from "react";
import EditProfilePopup from './EditProfilePopup';
import AddCardPopup from './AddCardPopup';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from './ImagePopup';



function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({isOpened: false})

  function handleCardClick({link, name, isOpened}) {
    setSelectedCard({
      link,
      name,
      isOpened: !isOpened
    })
    
  }


  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }


  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard({isOpened: false})
  }

  return (
    <div className="root">
      <Header />
      <Main 
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick}
      />
      <Footer />
      <EditProfilePopup 
      isOpen ={isEditProfilePopupOpen}
      onClose = {closeAllPopups} />
      <AddCardPopup 
      isOpen ={isAddPlacePopupOpen}
      onClose = {closeAllPopups}/>
      <EditAvatarPopup 
      isOpen ={isEditAvatarPopupOpen}
      onClose = {closeAllPopups}
      />
      <ImagePopup 
       onClose = {closeAllPopups}
       card = {selectedCard}
      />

      

      <template id="place-template">
        <div className="place">
          <img src="about:blank" className="place__img" alt="Здесь картинка" />
          <button className="place__delete-btn"></button>
          <div className="place__text">
            <h3 className="place__title"></h3>
            <div className="place__likes">
              <button type="button" className="place__like"></button>
              <p className="place__like-counter">0</p>
            </div>
          </div>
        </div>
      </template>
    </div>
  );
}

export default App;



