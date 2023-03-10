import basket from '../assets/images/journey-basket.jpg';
import apple from '../assets/images/journey-apple.jpg';
import google from '../assets/images/journey-google.jpg';

const Journey = () => {
  return (
    <section className='container'>
      <div className='journey'>
        <img src={basket} alt='basket' />
        <h1>Start your journey here</h1>
        <p>
          Do this by asking yourself what you want and how you will know when
          you have got it
        </p>
      </div>
      <div className='journey-buttons'>
        <a href=''>
          <img src={apple} alt='' />
        </a>
        <a>
          <img src={google} alt='' />
        </a>
      </div>
    </section>
  );
};
export default Journey;
