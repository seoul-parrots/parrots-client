import BaseLayout from '@components/layouts/BaseLayout';
import LoginPage from '@pages/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpPage from '@pages/SignUpPage';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;