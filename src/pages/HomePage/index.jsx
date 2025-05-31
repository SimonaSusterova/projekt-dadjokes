import { useEffect, useState } from 'react';
import { Joke } from '../../Components/Joke/Joke'; 
import './style.css';

export const HomePage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      const response = await fetch('/api/jokes.json');
      const data = await response.json();
      setJokes(data);
    };

    fetchJokes();
  }, []);

  return (
    <div className="container">
      {jokes.map((joke) => (
        <Joke
          key={joke.id}
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
      
    </div>
  );
};

  
        