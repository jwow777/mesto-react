import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <>
      <Header/>
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={setSelectedCard}/>
      <Footer/>
      <PopupWithForm id='0' name='edit' title='Редактировать профиль' submit='Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input type='text' id='name-input' name='name' className='popup__input popup__input_type_name' placeholder='Имя' required minLength='2' maxLength='40' autoComplete='off' />
        <span className='name-input-error popup__input-error'></span>
        <input type='text' id='desc-input' name='about' className='popup__input popup__input_type_desc' placeholder='О себе' required minLength='2' maxLength='200' autoComplete='off' />
        <span className='desc-input-error popup__input-error'></span>
      </PopupWithForm>
      <PopupWithForm id='1' name='add' title='Новое место' submit='Создать' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input type='text' id='title-input' name='name' className='popup__input popup__input_type_title' placeholder='Название' required minLength='2' maxLength='30' autoComplete='off' />
        <span className='title-input-error popup__input-error'></span>
        <input type='url' id='link-input' name='link' className='popup__input popup__input_type_link' placeholder='Ссылка на изображение' required autoComplete='off' />
        <span className='link-input-error popup__input-error'></span>
      </PopupWithForm>
      <PopupWithForm id='2' name='avatar' title='Обновить аватар' submit='Сохранить' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input type='url' id='avatar-input' name='avatar' className='popup__input popup__input_type_avatar' placeholder='Ссылка на изображение' required autoComplete='off' />
        <span className='avatar-input-error popup__input-error'></span>
      </PopupWithForm>
      <PopupWithForm id='3' name='delete' title='Вы уверены?' submit='Да'/>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </>
  );
}

export default App;