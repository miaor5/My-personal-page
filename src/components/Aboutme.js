import '../styles/App.scss';
import image from '../img/file1.jpg';

function Aboutme(props) {
  return (
    <>
      <a id="about"> </a>
      <div className="aboutme">
        <h1 className="aboutme__title">Maria Ortiz </h1>
        <img className="aboutme__image" src={image} alt="Maria Ortiz" />
        <div className="aboutme__text">
          <p>
            I am a motivated and responsible person with excellent individual
            and team working skills, highly adaptable with continuous desire to
            keep learning and improving.
          </p>
          <p>
            After finishing my studies and during the pandemic, I started to get
            more and more interested in the world of web programming, which led
            me to enroll in an intensive course that has changed my professional
            objetives.
          </p>
        </div>
      </div>
    </>
  );
}
export default Aboutme;
