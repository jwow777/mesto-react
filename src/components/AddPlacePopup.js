import {useState} from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({name, link});
    props.onClose();
  }

  return (
    <PopupWithForm name='add' title='Новое место' submit='Создать' isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input 
        type='text' 
        id='title-input' 
        name='name' 
        className='popup__input popup__input_type_title' 
        placeholder='Название' 
        required 
        minLength='2' 
        maxLength='30' 
        autoComplete='off' 
        value={name || ''}
        onChange={handleChangeName}
      />
      <span className='title-input-error popup__input-error'></span>
      <input 
        type='url' 
        id='link-input' 
        name='link' 
        className='popup__input popup__input_type_link' 
        placeholder='Ссылка на изображение' 
        required 
        autoComplete='off' 
        value={link || ''}
        onChange={handleChangeLink}
      />
      <span className='link-input-error popup__input-error'></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;