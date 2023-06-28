import { styled } from "styled-components";
import { IStyleProps } from "../../interfaces";

export const ZeroTasksStyle = styled.li<IStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: transparent;
  
  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 180px;
    font-weight: 500;
    color: ${(props) => props.color};
    transition: 0.2s;

    svg {
      font-size: 42px;
    }
  }
`