import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import styled from 'styled-components';

const Error = () => {
  return (
    <Wrapper>
      <div>
        <img src={img} alt='not found' />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  color: #363940;
  min-height: 100vh;
  text-align: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    font-size: 36px;
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
    color: #95a1bb;
  }
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
    color: #6e38f7;
  }
`;

export default Error;
