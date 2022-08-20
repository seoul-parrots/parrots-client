import BaseLayout from '@components/layouts/BaseLayout';
import LoginPage from '@pages/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpPage from '@pages/SignUpPage';
import { AnimatePresence } from 'framer-motion';
import FeedPage from '@pages/FeedPage';
import BeakDetailPage from '@pages/BeakDetailPage';

const Router = () => (
  <AnimatePresence>
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/beak/:id" element={<BeakDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AnimatePresence>
);

export default Router;
