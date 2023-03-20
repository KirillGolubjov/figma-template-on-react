import { useState } from 'react';
import { Link } from 'react-router-dom';
import mask from '../assets/images/mask.jpg';
import FormRow from './FormRow';

const initialState = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

const RegForm = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, passwordConfirm } = values;
    if (!name || !email || !password || !passwordConfirm) {
      alert('Please fill out the fields');
      return;
    }
    alert('Registered!');
  };

  return (
    <section className='container' id='registration'>
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
              handleChange={handleChange}
              showLabel={false}
            />

            {/* email */}
            <FormRow
              type='email'
              name='email'
              placeholder='Email'
              value={values.email}
              handleChange={handleChange}
              showLabel={false}
            />

            {/* password */}
            <FormRow
              type='password'
              name='password'
              placeholder='Password'
              value={values.password}
              handleChange={handleChange}
              showLabel={false}
            />
            <button type='submit'>Registration</button>
          </form>
          <p>
            Already have an account? <Link to='/signin/'>Sign In</Link>
          </p>
        </div>
      </div>
    </section>
  );
};
export default RegForm;
