import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pm from './pages/Pm';

const App = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pm/:city" element={<Pm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
