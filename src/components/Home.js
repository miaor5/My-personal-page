import '../styles/App.scss';
import Menu from './Menu';
import Aboutme from './Aboutme';
import Skills from './Skills';
import Myprojects from './Myprojects';
import Contactme from './Contactme';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { BsMailbox } from 'react-icons/bs';

function Home(props) {
  return (
    <>
      <Menu />

      <main className="main__container">
        <nav className="social__links">
          <a href="https://github.com/miaor5" alt="Github" className="github">
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/maria-ortiz-mero-a48871206/"
            alt="Linkeding"
            className="ln"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:ortiz.maria.mero@gmail.com">
            <BsMailbox />
          </a>
        </nav>
        <div>
          <h1 className="main__container--name" id="Home">
            Hi,
            <br /> I am Maria,
            <br /> web developer
          </h1>
          <h3 className="main__container--title">Front-End Developer</h3>
          <a href="#contact" className="main__container--button">
            CONTACT ME
          </a>
        </div>
      </main>
      <Aboutme />
      <Skills />
      <Myprojects />
      <Contactme />
    </>
  );
}

export default Home;
