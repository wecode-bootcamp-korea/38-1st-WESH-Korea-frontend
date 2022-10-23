import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import MainPage from './pages/MainPage/MainPage';
import Cart from './pages/Cart/Cart';
import SignIn from './pages/Join/SignIn/SignIn';
import SignUp from './pages/Join/SignUp/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/productlist/:categories" element={<ProductList />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
