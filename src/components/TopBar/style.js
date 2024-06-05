import styled, { css } from 'styled-components';

const TopBarContainer = styled('div')`
  z-index: 100;
  position: fixed;
  top: 16px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 16px 24px;
  margin: 0 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  border-right: 1px solid rgba(255, 255, 255, 0.25);
  border-left: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 24px;
  background-color: #ffffff40;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.05);
  
  ${(props) => props.home && !props.isScroll && css`
    background-color: #00000040;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  `}

  ${(props) => props.isScroll && css`
    top: 0;
    margin: 0;
    padding: 16px 64px;
    border-radius: 0px;
    border: none;
  `}
  @media (max-width: 768px) {
    top: 0;
    margin: 0;
    padding: 16px 16px;
    border-radius: 0px;
    border: none;
  }
`;

const TopBarLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  @media (max-width: 768px) {
    width: 100%;
    gap: 0px;
    align-items: center;
    justify-content: space-between;
  }
`

const TopBarItem = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #A0A4B3;
  cursor: pointer;
  user-select: none;
  &:hover {
    color: #94AAFF;
  }
  ${(props) => props.selected && css`
    color: #94AAFF;
    &:hover {
      color: #94AAFF;
    }
  `}
`

const TopBarButton = styled.div`
  padding: 12px;
  border-radius: 12px;
  background-color: #94AAFF;

  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  opacity: 0;
  user-select: none;
  pointer-events: none;

  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    transition: all 0.05s;
    filter: brightness(0.8);
    transform: scale(0.95);
  }
  
  ${(props) => props.active && css`
    opacity: 1;
    pointer-events: auto;
  `}
` 

export { TopBarContainer, TopBarLeft, TopBarItem, TopBarButton };
