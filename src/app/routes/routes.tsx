import { BrowserRouter, Route, Routes } from 'react-router';
import { Forum } from '../../pages/forum/forum';
import { Home } from '../../pages/home/home';
import { AuthLayout } from '../layouts/authLayout/authLayout';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/forum" element={<Forum />}>
            <Route path=":postId" element={<Forum />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
