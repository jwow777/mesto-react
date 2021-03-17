import {useEffect, useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => api.getUserInfo().then(userDataFromServer => setCurrentUser(userDataFromServer)).catch(err => console.log(err)), [])

  // Открытие попапов
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  // Закрытие попапов
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  // Обновление данных пользователя
  function handleUpdateUser(userData) {
    api.setUserInfo(userData).then(res => setCurrentUser(res)).catch(err => console.log(err));
  }

  function handleUpdateAvatar(userData) {
    api.setUserAvatar(userData).then(res => setCurrentUser(res)).catch(err => console.log(err));
  }

  useEffect(() => api.getInitialCards().then(cardsFromServer => setCards(cardsFromServer)).catch(err => console.log(err)), []); 

  // Лайк/дизлайк карточки
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    if (!isLiked) {
      api.like(card._id).then(newCard => setCards(state => state.map(c => c._id === card._id ? newCard : c))).catch(err => console.log(err));
    } else {
      api.dislike(card._id).then(newCard => setCards(state => state.map(c => c._id === card._id ? newCard : c))).catch(err => console.log(err));
    }
  } 

  // Добавление карточки
  function handleAddPlace(cardData) {
    api.postCard(cardData).then(newCard => setCards([newCard, ...cards])).catch(err => console.log(err));
  }

  // Удаление карточки
  function handleCardDelete(card) {
    api.deleteCard(card._id).then(card => setCards(cards.filter(c => c._id !== card._id))).catch(err => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header/>
      <Main
        cards={cards}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={setSelectedCard}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}/>
      <Footer/>
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlace}/>
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </CurrentUserContext.Provider>
  );
}

export default App;