import { Link, useLocation } from 'react-router-dom';
import s from './HomePage.module.css';
import notFoundImg from '../../../img/not_found_ver.jpg';
import PropTypes from 'prop-types';

const HomePage = props => {
  const location = useLocation();
  const { movies } = props;

  return (
    <section className={s.section}>
      <ul className={s.trendingList}>
        {movies
          ? movies.map(
              ({
                id,
                name,
                original_name,
                title,
                original_title,
                poster_path,
              }) => {
                return (
                  <li key={id} className={s.trendingItem}>
                    <Link
                      to={{
                        pathname: `/movies/${id}`,
                        state: { ...location },
                      }}
                      className={s.trendingLink}
                    >
                      <img
                        className={s.img}
                        src={
                          poster_path
                            ? `https://image.tmdb.org/t/p/w500${poster_path}`
                            : notFoundImg
                        }
                        alt={name || original_name}
                        width="200px"
                      ></img>
                      <p className={s.title}>
                        {name || original_name || title || original_title}
                      </p>
                    </Link>
                  </li>
                );
              }
            )
          : null}
      </ul>
    </section>
  );
};

HomePage.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default HomePage;
