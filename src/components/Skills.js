import '../styles/App.scss';
import image2 from '../img/file2.png';
import image3 from '../img/file3.png';
import image4 from '../img/file4.png';
import image5 from '../img/file5.png';
import image6 from '../img/file6.webp';
import image7 from '../img/file7.jpg';

function Skills() {
  return (
    <>
      <a id="skills"> </a>
      <div className="container">
        <h1 className="skills__title">My skills</h1>
        <ul className="skills">
          <li>
            <img className="skills--icons" src={image2} alt="css" />
          </li>
          <li>
            <img className="skills--icons" src={image3} alt="" />
          </li>
          <li>
            <img className="skills--icons" src={image4} alt="" />
          </li>
          <li>
            <img className="skills--icons" src={image5} alt="" />
          </li>
          <li>
            <img className="skills--icons" src={image6} alt="" />
          </li>
          <li>
            <img className="skills--icons" src={image7} alt="" />
          </li>
        </ul>
      </div>
    </>
  );
}
export default Skills;
