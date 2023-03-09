import img2 from '../assets/images/img1.jpg';
import img1 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import icon from '../assets/images/Icon.jpg';
import phoneImg1 from '../assets/images/phone-1.jpg';
import phoneImg2 from '../assets/images/phone-2.jpg';

const Hero = () => {
  return (
    <section className='container'>
      <div className='hero'>
        <h1 className='hero-name'>
          We Connect <br />
          Startups
        </h1>
      </div>
      <div>
        <img src={img1} alt='img-1' className='hero-img-1' />
        <img src={img2} alt='img-2' className='hero-img-2' />
        <img src={img4} alt='img-4' className='hero-img-4' />
        <img src={img3} alt='img-3' className='hero-img-3' />
        <img src={phoneImg2} alt='img-6' className='hero-img-6' />
        <img src={phoneImg1} alt='img-5' className='hero-img-5' />

        <img src={icon} alt='icon' className='hero-img-icon-1' />
        <img src={icon} alt='icon' className='hero-img-icon-2' />
      </div>

      <div className='hero-btn'>
        <button type='button' className='hero-btn-1'>
          Download
        </button>
        <button type='button' className='hero-btn-2'>
          Try for free
        </button>
      </div>
      <div className='hero-text'>
        <p>Harness The Power of Your Dreams</p>
      </div>
      <div className='hero-link'>
        <a>Scroll to more</a>
      </div>
    </section>
  );
};
export default Hero;
