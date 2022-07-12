import '../styles/App.scss';
import Menu from './Menu';
import image from '../img/file1.jpg';

function Aboutme(props) {
  return (
    <>
      <Menu />
      <div className="aboutme">
        <section className="aboutme__text">
          <h1 className="aboutme__text--title">Maria Ortiz</h1>
          <p className="aboutme__text--description">
            I am a motivated and responsible person with excellent individual
            and team working skills, highly adaptable with continuous desire to
            keep learning and improving. After finishing my studies and during
            the pandemic, I started to get more and more interested in the world
            of web programming, which led me to enroll in an intensive course
            that has changed my professional objetives.
          </p>
        </section>
        <img className="aboutme__image" src={image} alt="Maria Ortiz" />
      </div>
    </>
  );
}
export default Aboutme;
