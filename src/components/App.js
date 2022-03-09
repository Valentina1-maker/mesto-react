import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {useState} from "react"

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditProfilePopupOpen] = useState(false)


  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsEditProfilePopupOpen(!isEditAvatarPopupOpen);
  }

  return (
    <div className="root">
      <Header />
      <Main 
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}/>
      <Footer />

      

      <template id="place-template">
        <div className="place">
          <img src="about:blank" class="place__img" alt="Здесь картинка" />
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



