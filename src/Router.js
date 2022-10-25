import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignUp from './pages/Join/SignUp/SignUp';
import ProductList from './pages/ProductList/ProductList';
import Product-detail from './pages/Product-detail/Product-detail';
import MainPage from './pages/MainPage/MainPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/productlist/:categories" element={<ProductList />} />
        <Route path="/product-detail/:id" element={<Product-detail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
