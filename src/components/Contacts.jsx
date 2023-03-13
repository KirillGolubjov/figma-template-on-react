import { contacts } from '../data/data';

const Contacts = () => {
  return (
    <section className='container'>
      <div className='contact'>
        <h1>Contacts</h1>
        <div className='contact-item'>
          {contacts.map((item) => {
            const { id, icon, title, address, phone } = item;
            return (
              <div key={id}>
                <img src={icon} alt='' />
                <h2>{title}</h2>
                <p>{address}</p>
                <a href=''>{phone}</a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Contacts;
