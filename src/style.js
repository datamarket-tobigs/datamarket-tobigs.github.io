import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 80px;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export default AppContainer;
