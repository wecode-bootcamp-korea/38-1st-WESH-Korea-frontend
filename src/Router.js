import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Orderlist from './components/Orderlist/Orderlist';
import Cart from './pages/Cart/Cart';
import ProductList from './pages/ProductList/ProductList';
import Nav from './components/Nav/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderlist" element={<Orderlist />} />
        <Route path="/" element={<ProductList />} />
        <Route path="/nav" element={<Nav />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
