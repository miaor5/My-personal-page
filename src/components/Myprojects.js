import '../styles/App.scss';
import Menu from './Menu';
import image2 from '../img/file2.png';

function Myprojects() {
  return (
    <>
      <Menu />
      <h1 className="skills__title">My projects</h1>
      <ul className="myprojects__list">
        <li className="myprojects__container">
          <section className="myprojects__container--text">
            <h2>Mi primer proyecto</h2>
            <p>Mi proyecto es muy bonito y aqui lo describire. </p>
          </section>
          <img className="myprojects__container--img" src={image2} alt="" />
        </li>

        <li className="myprojects__container">
          <section className="myprojects__container--text">
            <h2>Mi primer proyecto</h2>
            <p>Mi proyecto es muy bonito y aqui lo describire. </p>
          </section>
          <img className="myprojects__container--img" src={image2} alt="" />
        </li>

        <li className="myprojects__container">
          <section className="myprojects__container--text">
            <h2>Mi primer proyecto</h2>
            <p>Mi proyecto es muy bonito y aqui lo describire. </p>
          </section>
          <img className="myprojects__container--img" src={image2} alt="" />
        </li>
      </ul>
    </>
  );
}
export default Myprojects;
