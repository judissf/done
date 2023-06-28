import { styled } from 'styled-components'
import { IStyleProps } from '../../interfaces'

export const ThemeStyle = styled.button<IStyleProps>`
  display: flex;
  right: 70px;
  position: absolute;
  align-items: center;
  width: 60px;
  height: 25px;
  background-image: linear-gradient(to right, #fbff30, black);
  border: none;
  border-radius: 25px;
  cursor: pointer;

  span {
    right: ${(props) => props.right};
    box-shadow: inset 0 0 5px -1px white;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.8);
    background-color: black;
    transition: 0.5s;
    
    &:hover {
      svg {
        color: white;
      }
    }

    svg {
      font-size: 28px;
      color: #fbff30;
      transition: 0.2s;
    }
  }
`
