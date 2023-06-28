import { styled } from 'styled-components'
import { IStyleProps } from '../../interfaces'

export const FooterStyle = styled.footer<IStyleProps>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-width: 100vw;
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.background_color};

  p {
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => props.color};
    a {
      color: #718E6A;
      text-decoration: none;
      font-weight: bold;
    }
  }
`
