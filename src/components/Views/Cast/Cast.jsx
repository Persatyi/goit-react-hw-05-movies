import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from 'components/services/ApiService';
import s from './Cast.module.css';
import notFoundImg from 'img/not_found_ver.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    if (movieId) {
      api.movieId = movieId;
      api.fetchMovieCast('credits').then(setCredits);
    }
  }, [movieId]);

  return (
    <ul className={s.list}>
      {credits.length ? (
        credits.map(({ id, name, profile_path, original_name, character }) => {
          return (
            <li key={id} className={s.item}>
              <img
                className={s.img}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : notFoundImg
                }
                alt={name}
                width="200px"
              />
              <p className={s.name}>{name || original_name}</p>
              <p className={s.characterWrap}>
                <span className={s.character}>Character: </span>
                {character || 'not found...'}
              </p>
            </li>
          );
        })
      ) : (
        <li>
          <p>We don't have any cast for this movie</p>
        </li>
      )}
    </ul>
  );
};

export default Cast;
