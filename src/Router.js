import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignUp from './pages/Join/SignUp/SignUp';
import Nav from './components/Nav/Nav';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import MainPage from './pages/MainPage/MainPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Nav />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/mainPage" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
