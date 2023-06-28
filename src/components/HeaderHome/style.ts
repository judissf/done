import { styled } from "styled-components";
import { IStyleProps } from "../../interfaces";

export const HeaderHomeStyle = styled.header<IStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  width: 100%;
  height: 120px;
  background-color: ${(props) => props.background_color};
`

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1220px;
  width: 100%;
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;

  .figure-theme {
    display: flex;
    max-width: 630px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`
export const Close = styled.a<IStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) => props.background_color};
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: #6DD952;
  transition: 0.2s;
  border: none;
  text-decoration: none;
  margin-left: 10px;
  
  &:hover {
    background: lightgrey;
  }

`