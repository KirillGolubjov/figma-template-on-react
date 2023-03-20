import { BrowserRouter, Route, Routes } from '../node_modules/react-router-dom';
import App from './App';
import { SignIn } from './components';
import { Error, ProtectedRoute, Register } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Profile, SharedLayout } from './pages/panel';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='*' element={<Error />} />
        <Route path='/signin/' element={<SignIn />} />
        <Route path='/register/' element={<Register />} />
        <Route
          path='/user/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Profile />} />
        </Route>
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  );
};
export default Router;
