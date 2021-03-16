import {useContext} from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `element__btn-delete btn ${isOwn ? 'element__btn-delete_visible' : 'element__btn-delete_hidden'}`
  ); 

  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `element__btn-like btn ${isLiked && 'element__btn-like_active'}`
  );

  function handleClick() {
    props.onCardClick(props.card);
  }  

  function handleLikeClick() {
    props.onCardLike(props.card);
  }  

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }  

  return (
    <li className='element'>
      <div className='element__image' style={{backgroundImage: `url(${props.card.link})`}} onClick={handleClick}></div>
      <button type='button' className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
      <div className='element__container'>
        <h2 className='element__location'>{props.card.name}</h2>
        <div className='element__like-container'>
          <button type='button' className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
          <span className='element__like-counter'>{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;