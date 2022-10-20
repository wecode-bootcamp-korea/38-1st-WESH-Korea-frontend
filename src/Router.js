import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
// import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
// import SignUp from './Join/SignUp/SignUp';
// import SignIn from './Join/SignIn/SignIn';
// import Cart from './pages/Cart/Cart';
import MainPage from './pages/MainPage/MainPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
        {/* <Route path="/productlist" element={<ProductList />} /> */}
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/mainPage" element={<MainPage />} />
        {/* <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
