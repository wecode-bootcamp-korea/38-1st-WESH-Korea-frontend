import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList/ProductList';
import Nav from './components/Nav/Nav';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import MainPage from './pages/MainPage/MainPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/productlist/:categories" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
