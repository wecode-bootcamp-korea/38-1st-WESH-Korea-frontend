import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productlist from './pages/ProductList/ProductList';
import Productdetail from './pages/ProductDetail/ProductDetail';
import MainPage from './pages/MainPage/MainPage';
import Cart from './pages/Cart/Cart';
import SignIn from './pages/Join/SignIn/SignIn';
import SignUp from './pages/Join/SignUp/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product-list/:categories" element={<ProductList />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/Sign-in" element={<SignIn />} />
        <Route path="/Sign-up" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
