import styled, { css, keyframes } from 'styled-components'
import { colors } from '../../styles/colors'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`

const Text = styled.div`
  font-size: ${(props) => props.fontSize ? props.fontSize : '48px'};
  font-weight: ${(props) => props.fontWeight ? props.fontWeight : 'normal'};
  color: ${(props) => colors[props.color] || colors.text};

  @media (max-width: 768px) {
    font-size: 32px;
  }
  ${(props) => props.marginBottom && css`
    margin-bottom: ${props.marginBottom};
    @media (max-width: 768px) {
      margin-bottom: ${parseInt(props.marginBottom) / 2}px;
    }
  `}
  ${(props) => props.animation && css`
    animation: ${fadeIn} 1s ease forwards;
    opacity: 0;
  `}
`;

export { Text };
