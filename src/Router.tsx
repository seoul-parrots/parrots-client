import BaseLayout from '@components/layouts/BaseLayout';
import LoginPage from '@pages/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpPage from '@pages/SignUpPage';
import { AnimatePresence } from 'framer-motion';
import FeedPage from '@pages/FeedPage';
import BeakDetailPage from '@pages/BeakDetailPage';
import MyBeakListPage from '@pages/MyBeakListPage';
import MyProfilePage from '@pages/MyProfilePage';
import SecureRoute from '@components/SecureRoute';
import UploadPage from '@pages/UploadPage';

const Router = () => (
  <AnimatePresence>
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<LoginPage />} />
          <Route element={<SecureRoute />}>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/beak/:id" element={<BeakDetailPage />} />
            <Route path="/my/beaks" element={<MyBeakListPage />} />
            <Route path="/my/profile" element={<MyProfilePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </AnimatePresence>
);

export default Router;
