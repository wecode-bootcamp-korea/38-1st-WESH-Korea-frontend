import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
