import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignUp from './pages/Join/SignUp/SignUp';
import Product-list from './pages/Product-list/Product-list';
import Product-detail from './pages/Product-detail/Product-detail';
import MainPage from './pages/MainPage/MainPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/product-list/:categories" element={<Product-list />} />
        <Route path="/product-detail/:id" element={<Product-detail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
