import arrowLeft from '../assets/images/arrow-left.jpg';
import arrowRight from '../assets/images/arrow-right.jpg';
import { useState, useEffect } from 'react';
import person from '../data/data';

const Slider = () => {
  const [people, setPeople] = useState(person);
  const [index, setIndex] = useState(0);

  return (
    <section className='container'>
      <div className='slider'>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = '.nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastIndex';
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className='person-img' />
              <h1>{name}</h1>
              <h4>{title}</h4>
              <p>{quote}</p>
            </article>
          );
        })}
        <button className='slider-prev' onClick={() => setIndex(index - 1)}>
          <img src={arrowLeft} alt='' />
        </button>
        <button className='slider-next' onClick={() => setIndex(index + 1)}>
          <img src={arrowRight} alt='' />
        </button>
      </div>
    </section>
  );
};
export default Slider;
