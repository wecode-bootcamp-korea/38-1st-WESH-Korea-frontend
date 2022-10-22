import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import MainPage from './pages/MainPage/MainPage';
import SignIn from './pages/Join/SignIn/SignIn';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
