function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }  

  return (
    <li className='element'>
      <div className='element__image' style={{ backgroundImage: `url(${props.card.link})` }} onClick={handleClick}></div>
      <button type='button' className='element__btn-delete btn'></button>
      <div className='element__container'>
        <h2 className='element__location'>{props.card.name}</h2>
        <div className='element__like-container'>
          <button type='button' className='element__btn-like btn'></button>
          <span className='element__like-counter'>{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;