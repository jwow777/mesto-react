import PopupWithForm from './PopupWithForm';

function DeletePopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.onDeleteCard(props.isOpen);
    props.onClose();
  }

  return <PopupWithForm 
          name='delete '
          title='Вы уверены?'
          submit='Да'
          isOpen={props.isOpen} 
          onClose={props.onClose} 
          onSubmit={handleSubmit} 
         />;
}

export default DeletePopup;