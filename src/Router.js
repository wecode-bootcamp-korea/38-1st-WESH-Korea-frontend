import { BrowserRouter, Routes, Route } from 'react-router-dom';
git;
import ProductDetail from './pages/ProductDetail/ProductDetail';
import MainPage from './pages/MainPage/MainPage';
import Orderlist from './pages/Cart/Orderlist/Orderlist';
import Cart from './pages/Cart/Cart';
import ProductList from './pages/ProductList/ProductList';
import Nav from './components/Nav/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderlist" element={<Orderlist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
