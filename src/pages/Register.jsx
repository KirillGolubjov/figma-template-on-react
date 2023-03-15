import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mask from '../assets/images/mask.jpg';
import { FormRow } from '../components';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../features/user/userSlice';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const Register = () => {
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);

  const [values, setValues] = useState(initialState);

  const handleFormInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = values;
    if (!name || !email || !password) {
      toast.error('Please fill out the fields');
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  return (
    <Wrapper className='container'>
      <div className='main-content'>
        <div className='content-text'>
          <h1>Create your free account</h1>
          <p>
            Let us first talk about dreams. We all know that dreams do play a
            role in our daily lives. The majority of people pay little attention
            to dreams. Dreams can help us find solutions to our daily problems
            and see things from a different perspective. Whenever we are
            dreaming, we can be who or what we want to be, regardless of the
            fact that in real life.
          </p>
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
            {/* Name */}
            <FormRow
              type='name'
              name='name'
              placeholder='Full Name'
              value={values.name}
              handleFormInput={handleFormInput}
            />

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

            <button
              type='submit'
              disabled={isLoading}
              style={{ marginTop: '30px' }}
            >
              {isLoading ? 'Loading...' : 'Register'}
            </button>
          </form>
          <p>
            Already have an account? <Link to='/signin/'>Sign In</Link>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Register;

const Wrapper = styled.main`
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
