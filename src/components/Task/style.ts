import { styled } from "styled-components";
import { IStyleProps } from "../../interfaces";

export const TaskStyle = styled.div<IStyleProps>`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 1195px;
  width: 100%;
  height: 50px;
  background-color: transparent;
  border-radius: 25px;
  border: ${(props) => props.border_color};
  box-shadow: 0 0 3px 1px transparent;
  transition: 0.3s;
  
  &:hover {
    border: ${(props) => props.border_color_hover};
    background-color: ${(props) => props.background_color};
    box-shadow: ${(props) => props.box_shadow};
  }
  `
export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 1172px;
  width: 100%;
  border-radius: 25px;
  cursor: pointer;
  overflow: hidden;
  padding-left: 20px;
`

export const Status = styled.div<IStyleProps>`
  width: 16px;
  height: 16px;
  border-radius: 25px;
  background-color: ${(props) => props.background_color};
`

export const Description = styled.p<IStyleProps>`
  padding-left: 15px;
  color: ${(props) => props.color};
  font-size: 15px;
  font-weight: 500;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  transition: 0.2s;
`

export const Date = styled.p<IStyleProps>`
  position: absolute;
  right: 50px;
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.color};
  transition: 0.2s;

  @media (max-width: 610px) {
    visibility: hidden;
  }
`

export const ButtonDone = styled.button`
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: gray;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  
  &:hover {
    background-color: #6DD952;
    transform: scale(1.1);
  }
  
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.8);
    transition: 0.2s;
    
    &:hover {
      svg {
        color: green;
        opacity: 1;
      }
    }
    
    svg {
      transition: 0.3s;
      opacity: 0;
      font-size: 22px;
    }
  }
`