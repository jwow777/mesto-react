function ImagePopup(props) {
  return (
    <div className={`popup popup_overlay_image${props.card ? ' popup_opened' : ''}`}>
      <div className='popup__container popup__container_image'>
        <img className='popup__image' src={props.card.link} alt={props.card.name} />
        <p className='popup__description'>{props.card.name}</p>
      </div>
      <button type='button' className='popup__btn-close btn' onClick={props.onClose}></button>
    </div>
  );
}

export default ImagePopup;