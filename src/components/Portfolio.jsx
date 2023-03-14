import Modal from './Modal';
import { useGlobalContext } from '../context';
import { portfolio } from '../data/data';

const Portfolio = () => {
  const { toggleModal } = useGlobalContext();

  return (
    <section className='container'>
      <div className='portfolio'>
        <div className='portfolio-header'>
          <h1>Portfolio</h1>
          <p>
            Failure will never overtake me if my determination to succeed is
            strong enough.
          </p>
        </div>
        <div className='portfolio-images'>
          {portfolio.map((item) => {
            return (
              <button
                key={item.id}
                className='btn-portfolio'
                onClick={toggleModal}
              >
                <img src={item.img} />;
              </button>
            );
          })}

          <Modal />
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
