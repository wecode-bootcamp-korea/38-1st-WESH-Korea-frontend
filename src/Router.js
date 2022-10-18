import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ProductList from './pages/ProductList/ProductList';
import Nav from './components/Nav/Nav';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/nav" element={<Nav />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
