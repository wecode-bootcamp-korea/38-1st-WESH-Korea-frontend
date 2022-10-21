import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Normal from './components/Menutab/Normal';
import Mypage from './components/Menutab/Mypage';
import Orderlist from './components/Orderlist/Orderlist';
import Cart from './pages/Cart/Cart';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/normal" element={<Normal />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/orderlist" element={<Orderlist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
