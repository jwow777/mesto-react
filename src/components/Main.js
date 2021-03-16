import {useState, useEffect, useContext} from 'react';
import api from '../utils/api';
import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);
  console.log(cards);
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.like(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
    api.dislike(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  } 

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then((card) => {
        cards((state) => state.filter((c) => c._id === card._id));
    });
  } 

  useEffect(() => {
    Promise.all([api.getInitialCards()])
      .then(([cardsFromServer]) => {
        setCards(cardsFromServer);
      })
      .catch(err => console.log(err));
  }, []); 

  return (
    <main className='content'>
      <section className='profile'>
        <div className='profile__avatar' style={{backgroundImage: `url(${currentUser.avatar})`}} onClick={props.onEditAvatar}></div>
        <div className='profile__info'>
          <div className='profile__info-container'>
            <h1 className='profile__full-name'>{currentUser.name}</h1>
            <button type='button' className='profile__btn-edit btn' onClick={props.onEditProfile}></button>
          </div>
          <p className='profile__description'>{currentUser.about}</p>
        </div>
        <button type='button' className='profile__btn-add btn' onClick={props.onAddPlace}></button>
      </section>
      <section className='elements'>
        <ul className='elements__container'>
          {cards.map(item => <Card card={item} onCardClick={props.onCardClick} key={item._id} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>)}
        </ul>
      </section>
    </main>
  );
}

export default Main;