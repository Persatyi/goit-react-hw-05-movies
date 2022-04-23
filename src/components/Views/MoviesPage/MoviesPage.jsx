import { Link, useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from 'components/services/ApiService';

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
    if (!query) {
      return;
    }

    api.searchQuery = query;
    api.fetchMovieByKeyWord().then(setMovies);
  }, [query]);

  return (
    <>
      <form onSubmit={findMovie}>
        <input
          onChange={e => {
            setValue(e.target.value);
          }}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      <ul>
        {!!movies.length &&
          movies.map(({ id, title, original_title }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`}>{title || original_title}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default MoviesPage;
