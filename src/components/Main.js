import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setcards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userDataFromServer, cardsFromServer]) => {
        setUserName(userDataFromServer.name);
        setUserDescription(userDataFromServer.about);
        setUserAvatar(userDataFromServer.avatar);
        setcards(cardsFromServer);
      })
      .catch(err => console.log(err));
  }, []); 

  return (
    <main className='content'>
      <section className='profile'>
        <div className='profile__avatar' style={{backgroundImage: `url(${userAvatar})`}} onClick={props.onEditAvatar}></div>
        <div className='profile__info'>
          <div className='profile__info-container'>
            <h1 className='profile__full-name'>{userName}</h1>
            <button type='button' className='profile__btn-edit btn' onClick={props.onEditProfile}></button>
          </div>
          <p className='profile__description'>{userDescription}</p>
        </div>
        <button type='button' className='profile__btn-add btn' onClick={props.onAddPlace}></button>
      </section>
      <section className='elements'>
        <ul className='elements__container'>
          {cards.map(item => <Card card={item} onCardClick={props.onCardClick} key={item._id}/>)}
        </ul>
      </section>
    </main>
  );
}

export default Main;