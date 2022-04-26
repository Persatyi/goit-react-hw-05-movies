import {
  NavLink,
  Route,
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';
import api from 'components/services/ApiService';
import s from './MovieDetailsPage.module.css';
import notFoundImg from 'img/not_found_ver.jpg';
import { Audio } from 'react-loader-spinner';
import PropTypes from 'prop-types';
const Cast = lazy(() => import('../Cast/Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import('../Reviews/Reviews' /* webpackChunkName: "reviews" */)
);
const NotFound = lazy(() =>
  import('../NotFound/NotFound' /* webpackChunkName: "not-found" */)
);

const MovieDetailsPage = () => {
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const location = useLocation();
  const history = useHistory();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (movieId) {
      api.fetchMoviesById(movieId).then(setMovie);
    }
  }, [movieId]);

  const prevPage = () => {
    let checkLocation = '/';

    const pathname = location?.state?.pathname;
    const search = location?.state?.search;

    if (pathname && search) {
      checkLocation = `${pathname}${search}`;
    } else if (pathname) {
      checkLocation = `${pathname}`;
    }

    history.push(checkLocation);
  };

  return (
    <section className={s.section}>
      <button className={s.backBtn} type="button" onClick={prevPage}>
        Back
      </button>
      {movie ? (
        <>
          <div className={s.wrapper}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : notFoundImg
              }
              alt={movie.original_title}
              width="300px"
            />
            <div className={s.contentWrapper}>
              <h2 className={s.mainTitle}>
                {movie.title ||
                  movie.name ||
                  movie.original_name ||
                  movie.original_title}
                (
                {new Date(
                  movie.release_date || movie.first_air_date
                ).getFullYear()}
                )
              </h2>
              <p className={s.rating}>
                User Score: {Math.round((movie.vote_average / 10) * 100)}%
              </p>
              <h2 className={s.overview}>Overview</h2>
              <p>{movie.overview || 'Data not found'}</p>
              <h2 className={s.genres}>Genres</h2>
              <p>
                {movie.genres.map(({ name }) => name).join(' ') ||
                  'Data not found'}
              </p>
            </div>
          </div>
          <hr />
          <p className={s.addon}>Additional information</p>
          <div className={s.addonInfoWrapper}>
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: { ...location.state },
              }}
              className={s.cast}
              activeClassName={s.active}
            >
              Cast
            </NavLink>
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: { ...location.state },
              }}
              className={s.reviews}
              activeClassName={s.active}
            >
              Reviews
            </NavLink>
          </div>
          <hr />
        </>
      ) : (
        <Suspense
          fallback={
            <Audio
              height="100"
              width="100"
              color="#465298"
              ariaLabel="loading"
              wrapperClass="loading"
            />
          }
        >
          <NotFound />
        </Suspense>
      )}

      <Suspense
        fallback={
          <Audio
            height="100"
            width="100"
            color="#465298"
            ariaLabel="loading"
            wrapperClass="loading"
          />
        }
      >
        <Route path="/movies/:movieId/cast">
          <Cast />
        </Route>
        <Route path="/movies/:movieId/reviews">
          <Reviews />
        </Route>
      </Suspense>
    </section>
  );
};

MovieDetailsPage.propTypes = {
  movie: PropTypes.object,
};

export default MovieDetailsPage;
