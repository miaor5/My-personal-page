import { Link } from 'react-router-dom';

function Menu(props) {
  return (
    <>
      <header className="header">
      
        <div>
          <ul className="header__list">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#skills">SKILLS</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#contact">CONTACT ME</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
export default Menu;
