import {useContext} from 'react';
import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

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
          {props.cards.map(item => <Card card={item} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} key={item._id}/>)}
        </ul>
      </section>
    </main>
  );
}

export default Main;