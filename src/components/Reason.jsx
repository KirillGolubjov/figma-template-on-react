import { features } from '../data/data';

const Reason = () => {
  return (
    <div className='reason-container' style={{ marginBottom: '100px' }}>
      {features.map((item) => {
        const { id, name, text, logo } = item;
        return (
          <div key={id}>
            <div className='reason-item'>
              <img src={logo} alt='features logo' />
              <h1>{name}</h1>
            </div>
            <p className='reason-text'>{text}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Reason;
