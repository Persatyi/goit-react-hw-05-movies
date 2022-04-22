import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from 'components/services/ApiService';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    api.movieId = movieId;
    api.fetchMovieDetails('credits').then(setCredits);
  }, [movieId]);
  return <>Cast</>;
};

export default Cast;
