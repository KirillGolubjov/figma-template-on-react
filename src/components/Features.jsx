import Reason from './Reason';

const Features = () => {
  return (
    <section className='container'>
      <div className='features-header'>
        <h1>Your choice</h1>
        <p>
          There are many reasons to get down and start to get depressed about
          your situation
        </p>
      </div>
      <div className='reasons'>
        <Reason />
      </div>
    </section>
  );
};
export default Features;
