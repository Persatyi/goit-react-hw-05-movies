import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from 'components/services/ApiService';
import s from './Reviews.module.css';
import PropTypes from 'prop-types';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api.movieId = movieId;
    api.fetchMovieReviews('reviews').then(setReviews);
  }, [movieId]);

  return (
    <ul className={s.list}>
      {reviews.length ? (
        reviews.map(({ author, content, author_details, id }) => {
          return (
            <li key={id} className={s.item}>
              <h3 className={s.author}>{author || author_details.name}</h3>
              <p>
                {content || 'oops, there is no content from this author...'}
              </p>
            </li>
          );
        })
      ) : (
        <li>
          <p>We don't have any reviews for this movie</p>
        </li>
      )}
    </ul>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.array,
};

export default Reviews;
