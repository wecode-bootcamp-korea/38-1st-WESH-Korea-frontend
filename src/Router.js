import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Orderlist from './components/Orderlist/Orderlist';
import Cart from './pages/Cart/Cart';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderlist" element={<Orderlist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
