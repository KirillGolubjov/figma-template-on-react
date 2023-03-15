import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { SignIn } from './components';
import { Error, Register } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='*' element={<Error />} />
        <Route path='/signin/' element={<SignIn />} />
        <Route path='/register/' element={<Register />} />
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  );
};
export default Router;
