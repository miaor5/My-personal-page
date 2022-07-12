import { Link } from 'react-router-dom';

function Menu(props) {
  return (
    <>
      <header className="header">
        <div className="header__title">
          <h4 className="header__title--title">Maria Ortiz</h4>
        </div>
        <div className="header_menu">
          <nav>
            <ul className="header_menu--list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Aboutme">About Me</Link>
              </li>
              <li>
                <Link to="/Myprojects">Projects</Link>
              </li>
              <li>
                <Link to="/Contactme">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Menu;
