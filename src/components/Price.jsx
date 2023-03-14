import { useState } from 'react';
import { pricing } from '../data/data';

const Price = () => {
  const [prices, setPrices] = useState(pricing);
  return (
    <section className='container' style={{ marginBottom: '100px' }}>
      <div className='pricing-header'>
        <h1>Choose your plan</h1>
        <p>
          There are many reasons to get down and start to get depressed about
          your situation.
        </p>
      </div>
      <div className='pricing-list'>
        {prices.map((price) => {
          const { id, title, cost, text, button } = price;
          return (
            <div key={id} className='pricing-box'>
              <h2>{title}</h2>
              <h1>
                {typeof cost !== 'number' ? (
                  <img src={cost} alt='' />
                ) : (
                  <>
                    <span className='pricing-dollar'>$</span>
                    {cost}
                  </>
                )}
              </h1>

              <div className='pricing-text'>
                {text[0]}
                <br />
                {text[1]}
                <br />
                {text[2]}
              </div>
              <button
                type='button'
                className='pricing-button'
                style={{
                  backgroundColor: `${button === 'BUY NOW' && '#6E38F7'}`,
                  color: `${button === 'BUY NOW' && 'white'}`,
                  button_type: 'buy',
                }}
              >
                <a href=''>{button}</a>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Price;
