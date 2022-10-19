import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import SignIn from './pages/Join/SignIn/SignIn';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
