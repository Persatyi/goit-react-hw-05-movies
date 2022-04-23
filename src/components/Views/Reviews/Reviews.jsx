import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from 'components/services/ApiService';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api.movieId = movieId;
    api.fetchMovieReviews('reviews').then(setReviews);
  }, [movieId]);

  return (
    <ul>
      {reviews.length ? (
        reviews.map(({ author, content, author_details, id }) => {
          return (
            <li key={id}>
              <h3>{author || author_details.name}</h3>
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

export default Reviews;
