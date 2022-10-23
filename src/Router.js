import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './pages/Join/SignIn/SignIn';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import MainPage from './pages/MainPage/MainPage';
import Orderlist from './pages/Cart/Orderlist/Orderlist';
import Cart from './pages/Cart/Cart';
import ProductList from './pages/ProductList/ProductList';
import Nav from './components/Nav/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Nav />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderlist" element={<Orderlist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
