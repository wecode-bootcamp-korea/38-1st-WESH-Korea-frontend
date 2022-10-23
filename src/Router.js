import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './pages/Join/SignIn/SignIn';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import MainPage from './pages/MainPage/MainPage';
import Nav from './components/Nav/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
