import styled, { css } from 'styled-components'

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 80px;
  ${(props) => props.position && css`
    z-index: 1;
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: ${(props) => props.isScroll ? 'translateX(-50%) scale(0)' : 'translateX(-50%) scale(1)'};
  `}
`;

const Button = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  padding: 16px 24px;
  border-radius: 48px;
  background-color: #5B7CFA;
  user-select: none;

  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.8);
  }
`;

const ButtonDescription = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #CAD5FF;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 4px;
`;

export { ButtonContainer, Button, ButtonDescription, Icon };
