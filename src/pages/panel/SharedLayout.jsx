import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { UserNavbar } from '../../components/panelComponents';

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className='panel'>
        <div>
          <UserNavbar />
          <div className='panel-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .panel-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .panel {
      grid-template-columns: auto 1fr;
    }
    .panel-page {
      width: 90%;
    }
  }
`;
export default SharedLayout;
