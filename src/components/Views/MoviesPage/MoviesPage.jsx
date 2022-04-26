import { useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense, lazy } from 'react';
import s from './MoviesPage.module.css';
import api from 'components/services/ApiService';
import { Audio } from 'react-loader-spinner';
import PropTypes from 'prop-types';
const HomePage = lazy(() => import('components/Views/HomePage/HomePage'));

const MoviesPage = () => {
  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);
  const searchLocation = location.search;
  const params = new URLSearchParams(searchLocation);
  const query = params.get('query');

  const findMovie = e => {
    e.preventDefault();
    if (!value) return;

    history.push({
      ...location,
      search: `query=${value}`,
    });
    setValue('');
  };

  useEffect(() => {
    if (query) {
      api.searchQuery = query;
      api.fetchMovieByKeyWord().then(setMovies);
    }
  }, [query]);

  return (
    <section className={s.section}>
      <form className={s.form} onSubmit={findMovie}>
        <input
          className={s.input}
          onChange={e => {
            setValue(e.target.value);
          }}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit" className={s.button}>
          <span>Search</span>
        </button>
      </form>
      {!!movies.length && (
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
          <HomePage movies={movies} />
        </Suspense>
      )}
    </section>
  );
};

MoviesPage.propTypes = {
  movies: PropTypes.array,
};

export default MoviesPage;
