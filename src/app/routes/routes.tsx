import { BrowserRouter, Route, Routes } from 'react-router';
import { Posts } from '../../pages/posts/posts';
import { Home } from '../../pages/home/home';
import { AuthLayout } from '../layouts/authLayout/authLayout';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/posts" index element={<Posts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
