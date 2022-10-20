import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Mainpage from './pages/MainPage/MainPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/nav" element={<Nav />} />
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
