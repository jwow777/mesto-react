import {useRef} from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({avatar: inputRef.current.value});
    props.onClose();
    e.target.reset();
  }

  return (
    <PopupWithForm name='avatar' title='Обновить аватар' submit='Сохранить' isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input
        type='url'
        name='avatar'
        className='popup__input'
        placeholder='Ссылка на изображение'
        required
        autoComplete='off'
        ref={inputRef}
      />
      <span className='popup__input-error'></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;