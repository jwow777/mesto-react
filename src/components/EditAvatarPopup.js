import {useRef} from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({avatar: inputRef.current.value});
    props.onClose();
  }

  return (
    <PopupWithForm name='avatar' title='Обновить аватар' submit='Сохранить' isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input
        type='url'
        id='avatar-input'
        name='avatar'
        className='popup__input popup__input_type_avatar'
        placeholder='Ссылка на изображение'
        required
        autoComplete='off'
        ref={inputRef}
      />
      <span className='avatar-input-error popup__input-error'></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;