import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mask from '../assets/images/mask.jpg';
import FormRow from '../components/FormRow';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../features/user/userSlice';
import { toast } from 'react-toastify';

const initialState = {
  email: '',
  password: '',
};

const SignIn = () => {
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);

  const [values, setValues] = useState(initialState);

  const handleFormInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      toast.error('Please fill out the fields');
      return;
    }
    dispatch(loginUser({ email, password }));
  };

  return (
    <Wrapper className='container'>
      <div className='main-content'>
        <div className='content-text'>
          <h1>Login to your Account</h1>

          <ul className='list-items'>
            <li className='list-item'>
              <img src={mask} /> <span>Easy setup, fast start</span>
            </li>
            <li className='list-item'>
              <img src={mask} />
              <span>Free forever for core features</span>
            </li>
            <li className='list-item'>
              <img src={mask} />
              <span>14-day trial of premium features</span>
            </li>
          </ul>
        </div>
        <div className='content-form'>
          <form onSubmit={onSubmit}>
            {/* email */}
            <FormRow
              type='email'
              name='email'
              placeholder='Email'
              value={values.email}
              handleFormInput={handleFormInput}
            />

            {/* password */}
            <FormRow
              type='password'
              name='password'
              placeholder='Password'
              value={values.password}
              handleFormInput={handleFormInput}
            />

            <button type='submit' disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Log In'}
            </button>
          </form>
          <p>
            Not a member yet? <Link to='/register/'>Sign Up</Link>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default SignIn;

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  margin-top: auto;
  border-top: 5px solid #6e38f7;
  background-color: var(--clr-grey-10);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  padding: 2rem 2.5rem;
  margin: 5rem auto;
  transition: var(--transition);
`;
