import { social } from '../data/data';

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <section className='container'>
      <div className='footer-info'>
        <div className='footer-social'>
          {social.map((item) => {
            return (
              <a key={item.id} href=''>
                <img src={item.icon} alt='' />
              </a>
            );
          })}
        </div>
        <p>Copyright © {currentYear}. All rights reserved.</p>
      </div>
    </section>
  );
};
export default Footer;
