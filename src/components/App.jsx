import { Route, Switch, Redirect } from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';
import api from 'components/services/ApiService';
import Navigation from 'components/Navigation/Navigation';
import { Audio } from 'react-loader-spinner';
const HomePage = lazy(() =>
  import('./Views/HomePage/HomePage' /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import('./Views/MoviesPage/MoviesPage' /* webpackChunkName: "movie-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    './Views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  )
);

export const App = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    api.fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <Navigation />
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
        <Switch>
          <Route path="/" exact>
            <HomePage movies={movies} />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
};
