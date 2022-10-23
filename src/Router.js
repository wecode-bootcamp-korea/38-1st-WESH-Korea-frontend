import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/nav" element={<Nav />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
