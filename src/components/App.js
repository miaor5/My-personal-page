import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Aboutme from './Aboutme';
import Myprojects from './Myprojects';
import Contactme from './Contactme';
import Skills from './Skills';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Aboutme" component={<Aboutme />} />
        <Route exact path="/Myprojects" element={<Myprojects />} />
        <Route exact path="/Contactme" element={<Contactme />} />
        <Route exact path="/Skills" element={<Skills />} />
      </Routes>
    </>
  );
};

export default App;
