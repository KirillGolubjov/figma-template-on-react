import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mask from '../assets/images/mask.jpg';

const SignIn = () => {
  const initialState = {
    email: '',
    password: '',
  };

  const [values, setValues] = useState(initialState);

  const handleFormInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      alert('Please fill out the fields');
      return;
    }
    alert('Logged In!');
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
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={values.email}
              onChange={handleFormInput}
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={values.password}
              onChange={handleFormInput}
            />

            <button type='submit'>Log In</button>
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
