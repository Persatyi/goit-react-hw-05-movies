import {
  NavLink,
  Route,
  useParams,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';
import api from 'components/services/ApiService';
import notFoundImg from 'img/not_found_ver.jpg';
import s from './MovieDetailsPage.module.css';
import { Audio } from 'react-loader-spinner';
const Cast = lazy(() => import('../Cast/Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import('../Reviews/Reviews' /* webpackChunkName: "reviews" */)
);

const MovieDetailsPage = () => {
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const history = useHistory();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    api.fetchMoviesById(movieId).then(setMovie);
  }, [movieId]);

  const prevPage = () => {
    history.push('/');
  };

  return (
    <div>
      {movie && (
        <>
          <button className={s.backBtn} type="button" onClick={prevPage}>
            Back
          </button>
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
          <p>Additional information</p>
        </li>
        <li>
          <NavLink to={`${url}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      <hr />
      <Suspense
        fallback={
          <Audio height="100" width="100" color="grey" ariaLabel="loading" />
        }
      >
        <Route path="/movies/:movieId/cast">
          <Cast />
        </Route>
        <Route path="/movies/:movieId/reviews">
          <Reviews />
        </Route>
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
