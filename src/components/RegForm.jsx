import { useState } from 'react';
import mask from '../assets/images/mask.jpg';

const initialState = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

const RegForm = () => {
  const [values, setValues] = useState(initialState);

  const handleFormInput = (e) => {
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
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={values.name}
              onChange={handleFormInput}
            />
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
            <input
              type='password'
              name='passwordConfirm'
              placeholder='Repeat password'
              value={values.passwordConfirm}
              onChange={handleFormInput}
            />
            <button type='submit'>Registration</button>
          </form>
          <p>
            Already have an account? <a href=''>Sign In</a>
          </p>
        </div>
      </div>
    </section>
  );
};
export default RegForm;
