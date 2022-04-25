import img from '../../../img/404.jpg';

const NotFound = () => {
  return (
    <section>
      <img src={img} alt="404" />
      <h1>Err...</h1>
      <p>Congratulations, you broke the Internet</p>
      <p>
        The page you're after no longer exist. Use the navigation above to find
        what you're after.
      </p>
    </section>
  );
};

export default NotFound;
