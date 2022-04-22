import { Link } from 'react-router-dom';

const HomePage = props => {
  const { trending } = props;

  return (
    <>
      <ul>
        {trending
          ? trending.map(
              ({ id, name, original_name, title, original_title }) => {
                return (
                  <li key={id}>
                    <Link to={`/movies/${id}`}>
                      {name || original_name || title || original_title}
                    </Link>
                  </li>
                );
              }
            )
          : null}
      </ul>
    </>
  );
};

export default HomePage;
