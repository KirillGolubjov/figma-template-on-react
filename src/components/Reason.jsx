import { features } from '../data/data';

const Reason = () => {
  return (
    <div className='reason-container'>
      {features.map((item) => {
        const { id, name, text, logo } = item;
        return (
          <article key={id}>
            <div className='reason-item'>
              <img src={logo} alt='features logo' />
              <h1>{name}</h1>
            </div>
            <p className='reason-text'>{text}</p>
          </article>
        );
      })}
    </div>
  );
};
export default Reason;
