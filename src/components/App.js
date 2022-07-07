import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Aboutme from './Aboutme';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
