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
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
              neque debitis voluptatum iste laboriosam reiciendis dolorem,
              voluptas dolore doloremque, qui velit quia, quis quasi quibusdam.
              Sapiente rem inventore fuga molestiae?{' '}
            </p>
          </section>
          <img className="myprojects__container--img" src={image2} alt="" />
        </li>

        <li className="myprojects__container">
          <section className="myprojects__container--text">
            <h2>Mi primer proyecto</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quibusdam sunt iure expedita quas suscipit ex veritatis iusto,
              modi nam? Minima et obcaecati officia dignissimos, dolorum
              corrupti fuga. Dolore, eos?{' '}
            </p>
            <a href="">Ir a mi proyecto</a>
          </section>
          <img className="myprojects__container--img" src={image2} alt="" />
        </li>

        <li className="myprojects__container">
          <section className="myprojects__container--text">
            <h2>Mi primer proyecto</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum perspiciatis fugit, eveniet sequi, impedit doloremque
              numquam facere, similique recusandae alias in at obcaecati
              laudantium quos nemo asperiores quod debitis natus.{' '}
            </p>
            <a href="">Ir a mi proyecto</a>
          </section>
          <img className="myprojects__container--img" src={image2} alt="" />
        </li>

        <li className="myprojects__container">
          <section className="myprojects__container--text">
            <h2>Mi primer proyecto</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum perspiciatis fugit, eveniet sequi, impedit doloremque
              numquam facere, similique recusandae alias in at obcaecati
              laudantium quos nemo asperiores quod debitis natus.{' '}
            </p>
            <a href="">Ir a mi proyecto</a>
          </section>
          <img className="myprojects__container--img" src={image2} alt="" />
        </li>
      </ul>
    </>
  );
}
export default Myprojects;
