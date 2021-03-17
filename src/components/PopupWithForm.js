function PopupWithForm(props) {
  return (
    <>
      <div className={`popup popup_overlay_form popup_type_${props.name}${props.isOpen ? ' popup_opened': ''}`}>
        <div className='popup__container'>
          <form className={`popup__form popup__form_type_${props.name}`} onSubmit={props.onSubmit} noValidate>
            <h2 className='popup__title'>{props.title}</h2>
            {props.children}
            <button type='submit' className='popup__button btn'>{props.submit}</button>
          </form>
        </div>
        <button type='button' className='popup__btn-close btn' onClick={props.onClose}></button>
      </div>
    </>
  );
}

export default PopupWithForm;