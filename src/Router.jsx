import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { SignIn } from './components';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='*' element={<App />} />
        <Route path='/signin/' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
