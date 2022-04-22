import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from 'components/services/ApiService';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  console.log('🚀 ~ reviews', reviews);

  useEffect(() => {
    api.movieId = movieId;
    api.fetchMovieDetails('reviews').then(setReviews);
  }, [movieId]);
  return <div>Reviews</div>;
};

export default Reviews;
