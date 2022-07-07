import { Link, Route, Routes } from 'react-router-dom';

function Menu(props) {
  return (
    <>
      <header className="header">
        <div className="header__title">
          <h4 className="header__title--title">My porfolio</h4>
        </div>
        <div className="header_menu">
          <nav>
            <ul className="header_menu--list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Aboutme">About me</Link>
              </li>
              <li>
                <Link to="/Myprojects">My projects</Link>
              </li>
              <li>
                <Link to="/Contactme">Contact me</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Menu;
