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
              <h2>Mi primer proyecto</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                neque debitis voluptatum iste laboriosam reiciendis dolorem,
                voluptas dolore doloremque, qui velit quia, quis quasi
                quibusdam. Sapiente rem inventore fuga molestiae?{' '}
              </p>
              <a href="" className="myproject--button">
                Ir a mi proyecto
              </a>
            </section>
            <img className="myprojects__container--img" src={project1} alt="" />
          </li>

          <li className="myprojects__container">
            <section className="myprojects__container--text">
              <h2>Mi primer proyecto</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                neque debitis voluptatum iste laboriosam reiciendis dolorem,
                voluptas dolore doloremque, qui velit quia, quis quasi
                quibusdam. Sapiente rem inventore fuga molestiae?{' '}
              </p>
              <a href="" className="myproject--button">
                Ir a mi proyecto
              </a>
            </section>
            <img className="myprojects__container--img" src={project2} alt="" />
          </li>

          <li className="myprojects__container">
            <section className="myprojects__container--text">
              <h2>Mi primer proyecto</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                neque debitis voluptatum iste laboriosam reiciendis dolorem,
                voluptas dolore doloremque, qui velit quia, quis quasi
                quibusdam. Sapiente rem inventore fuga molestiae?{' '}
              </p>
              <a href="" className="myproject--button">
                Ir a mi proyecto
              </a>
            </section>
            <img className="myprojects__container--img" src={project3} alt="" />
          </li>
        </ul>
      </div>
    </>
  );
}
export default Myprojects;
