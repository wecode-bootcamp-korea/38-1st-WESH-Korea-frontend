import { BrowserRouter, Routes, Route } from 'react-router-dom';


import SignUp from './pages/Join/SignUp/SignUp';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import MainPage from './pages/MainPage/MainPage';
import Nav from './components/Nav/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/" element={<MainPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
