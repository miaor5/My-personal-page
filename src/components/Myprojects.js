import '../styles/App.scss';
import project1 from '../img/project1.gif';
import project2 from '../img/project2.gif';
import project3 from '../img/project3.gif';

function Myprojects() {
  return (
    <>
      <a id="projects"> </a>
      <div className="container_b">
        <h1 className="project__title">My projects</h1>
        <ul className="myprojects__list">
          <li className="myprojects__container">
            <section className="myprojects__container--text">
              <p>
                Bootcamp group project. Creator of personalized digital business
                cards with the option to share through social networks.
              </p>
              <a
                href="https://miaor5.github.io/Awesome-Profile-Card/"
                className="myproject--button"
              >
                Go to my project
              </a>
            </section>
            <h2 className="text-title">Digital business card</h2>
            <img className="myprojects__container--img" src={project1} alt="" />
          </li>

          <li className="myprojects__container">
            <section className="myprojects__container--text">
              <p>
                Search engine for movies and series of the best 'wow' of actor
                Owen Wilson. Includes filters to facilitate the search.
              </p>
              <a
                href="https://miaor5.github.io/Movie-search-engine/"
                className="myproject--button"
              >
                Go to my project
              </a>
            </section>
            <h2 className="text-title">Movie search engine </h2>
            <img className="myprojects__container--img" src={project3} alt="" />
          </li>

          <li className="myprojects__container">
            <section className="myprojects__container--text">
              <p>
                Layout and design of an online furniture website. Responsive
                design with mobile and tablet.
              </p>
              <a
                href="https://miaor5.github.io/One-Space-Store-/"
                className="myproject--button"
              >
                Go to my project
              </a>
            </section>
            <h2 className="text-title">One Space Store</h2>
            <img className="myprojects__container--img" src={project2} alt="" />
          </li>
        </ul>
      </div>
    </>
  );
}
export default Myprojects;
