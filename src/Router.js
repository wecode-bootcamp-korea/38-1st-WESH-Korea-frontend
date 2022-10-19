import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/Join/SignIn/SignIn';
import ProductList from './pages/ProductList/ProductList';
import Nav from './components/Nav/Nav';
import App from './App';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<ProductList />} />
        <Route path="/nav" element={<Nav />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
