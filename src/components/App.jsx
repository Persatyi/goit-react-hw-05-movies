import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navigation from 'components/Navigation/Navigation';
import HomePage from 'components/Views/HomePage/HomePage';
import MoviesPage from 'components/Views/MoviesPage/MoviesPage';
import MovieDetailsPage from 'components/Views/MovieDetailsPage/MovieDetailsPage';
import api from 'components/services/ApiService';

export const App = () => {
  const [trending, setTrending] = useState(null);

  useEffect(() => {
    api.fetchTrendingMovies().then(setTrending);
  }, []);

  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage trending={trending} />
        </Route>
        <Route path="/movies" exact>
          <MoviesPage />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
      </Switch>
    </>
  );
};
