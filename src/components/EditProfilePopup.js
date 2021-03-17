import {useEffect, useState, useContext} from 'react';
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({name, about:description});
    props.onClose();
  }

  return (
    <PopupWithForm name='edit' title='Редактировать профиль' submit='Сохранить' isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input
        type='text'
        id='name-input'
        name='name'
        className='popup__input popup__input_type_name'
        placeholder='Имя'
        required
        minLength='2'
        maxLength='40'
        autoComplete='off'
        value={name || ''}
        onChange={handleChangeName}
      />
      <span className="name-input-error popup__input-error"></span>
      <input
        type='text'
        id='desc-input'
        name='about'
        className='popup__input popup__input_type_desc'
        placeholder='О себе'
        required
        minLength='2'
        maxLength='200'
        autoComplete='off'
        value={description || ''}
        onChange={handleChangeDescription}
      />
      <span className='desc-input-error popup__input-error'></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;