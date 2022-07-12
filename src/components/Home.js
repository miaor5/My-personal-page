import '../styles/App.scss';
import Menu from './Menu';
import Social from './Social';
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <>
      <Menu />
      <Social />
      <main className="main__container">
        <h1 className="main__container--name">
          Hi,
          <br /> I am Maria,
          <br /> web developer
        </h1>
        <h3 className="main__container--title">Front-End Developer</h3>
        <Link to="/Contactme" className="main__container--button">
          CONTACT ME{' '}
        </Link>
      </main>

      <footer></footer>
    </>
  );
}

export default Home;
