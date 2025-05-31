import React, { useState } from 'react';
import './style.css';

export const HomePage = () => {
  const joke = {
    id: 'user01',
    avatar:
      'https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png',
    name: 'Neroxx',
    text:
      'The secret service isn\'t allowed to yell "Get down!" anymore when the president is about to be attacked. Now they have to yell "Donald, duck!"',
    likes: 13,
    dislikes: 24,
  };

  const [likes, setLikes] = useState(joke.likes);
  const [dislikes, setDislikes] = useState(joke.dislikes);

  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={joke.avatar} alt={joke.name} />
            <p className="user-name">{joke.name}</p>
          </div>
          <p className="joke__text">{joke.text}</p>
        </div>
        <div className="joke__likes">
          <button
            className="btn-like btn-like--up"
            onClick={() => setLikes(likes + 1)}
          ></button>
          <span className="likes-count likes-count--up">{likes}</span>
          <button
            className="btn-like btn-like--down"
            onClick={() => setDislikes(dislikes + 1)}
          ></button>
          <span className="likes-count likes-count--down">{dislikes}</span>
        </div>
      </div>
    </div>
  );
};

