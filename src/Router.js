import { BrowserRouter, Routes, Route } from 'react-router-dom';


import SignUp from './pages/Join/SignUp/SignUp';
import Productlist from './pages/ProductList/ProductList';
import Productdetail from './pages/ProductDetail/ProductDetail';
import MainPage from './pages/MainPage/MainPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product-list/:categories" element={<Productlist />} />
        <Route path="/product-detail/:id" element={<Productdetail />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/signin" element={<SignIn />} /> */}
        <Route path="/" element={<MainPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
