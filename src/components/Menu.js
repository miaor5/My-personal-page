import { Link } from 'react-router-dom';

function Menu(props) {
  return (
    <>
      <header className="header">
        <h4 className="header__title">Maria Ortiz</h4>
        <div>
          <ul className="header__list">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <Link to="about">ABOUT ME</Link>
            </li>
            <li>
              <Link to="/Skills">SKILLS</Link>
            </li>
            <li>
              <Link to="/Myprojects">PROJECTS</Link>
            </li>
            <li>
              <Link to="/Contactme">CONTACT</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
export default Menu;
