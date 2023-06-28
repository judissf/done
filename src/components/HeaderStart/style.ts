import { styled } from "styled-components";
import { IStyleProps } from "../../interfaces";

export const HeaderStartStyle = styled.header<IStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.background_color};
  transition: 0.2s;
`