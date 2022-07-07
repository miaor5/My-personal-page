import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Aboutme from './Aboutme';
import Myprojects from './Myprojects';
import Contactme from './Contactme';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Aboutme" element={<Aboutme />} />
        <Route exact path="/Myprojects" element={<Myprojects />} />
        <Route exact path="/Contactme" element={<Contactme />} />
      </Routes>
    </>
  );
};

export default App;
