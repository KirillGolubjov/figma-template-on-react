import mask from '../assets/images/mask.jpg';

const RegForm = () => {
  const inputElement = document.querySelector('input');
  inputElement.setSelectionRange(3, 3);
  return (
    <section className='container'>
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
          <form>
            <input type='text' name='name' placeholder='Name' />
            <input type='email' name='email' placeholder='Email' />
            <input type='password' name='password' placeholder='Password' />
            <input
              type='password'
              name='password'
              placeholder='Repeat password'
            />
          </form>
          <button>Registration</button>
          <p>
            Already have an account? <a href=''>Sign In</a>
          </p>
        </div>
      </div>
    </section>
  );
};
export default RegForm;
