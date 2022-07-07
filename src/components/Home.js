import '../styles/App.scss';
import Menu from './Menu';
function Home(props) {
  return (
    <>
      <Menu />
      <main className="main__container">
        <h1 className="main__container--name">
          Hi,
          <br /> I am Maria,
          <br /> web developer
        </h1>
        <h3 className="main__container--title">Front-End Developer</h3>
        <button className="main__container--button">CONTACT ME </button>
      </main>

      <footer>This is my footer</footer>
    </>
  );
}

export default Home;
