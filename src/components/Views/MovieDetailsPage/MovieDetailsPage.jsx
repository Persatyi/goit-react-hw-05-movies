import { NavLink, Route, useParams, useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from 'components/services/ApiService';
import Cast from 'components/Views/Cast/Cast';
import Reviews from 'components/Views/Reviews/Reviews';
import notFoundImg from 'img/not_found_ver.jpg';

const MovieDetailsPage = () => {
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    api.fetchMoviesById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <div>
      {movie && (
        <>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : notFoundImg
            }
            alt={movie.original_title}
            width="300px"
          />
          <h2>
            {movie.title ||
              movie.name ||
              movie.original_name ||
              movie.original_title}
            (
            {new Date(movie.release_date || movie.first_air_date).getFullYear()}
            )
          </h2>
          <p>User Score: {Math.round((movie.vote_average / 10) * 100)}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>{movie.genres.map(({ name }) => name).join(' ')}</p>
        </>
      )}
      <hr />
      <ul>
        <li>
          <NavLink to={`${url}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      <hr />
      <Route path="/movies/:movieId/cast">
        <Cast />
      </Route>
      <Route path="/movies/:movieId/reviews">
        <Reviews />
      </Route>
    </div>
  );
};

export default MovieDetailsPage;
