
import { useEffect, useState } from 'react';
import './Joke.css';

export const Joke = ({ userAvatar, userName, text, likes = 0, dislikes = 0 }) => {
  const [upLikes, setUpLikes] = useState(likes);
  const [downLikes, setDownLikes] = useState(dislikes);

  const handleLike = () => {
    setUpLikes(upLikes + 1);
  };

  const handleDislike = () => {
    setDownLikes(downLikes + 1);
  };

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} alt={`${userName} avatar`} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>

      <div className="joke__likes">
        <button className="btn-like btn-like--up" onClick={handleLike}></button>
        <span className="likes-count likes-count--up">{upLikes}</span>
        <button className="btn-like btn-like--down" onClick={handleDislike}></button>
        <span className="likes-count likes-count--down">{downLikes}</span>
      </div>
    </div>
  );
};
