import { styled } from "styled-components";
import { IStyleProps } from "../../interfaces";

export const PriorityStatusStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  height: 24px;

  .label-status-color {
    display: flex;
    justify-content: space-between;
    width: 70px;
  }
`

export const InputRadio = styled.input`
  border: none;
  cursor: pointer;
`
export const Label = styled.label<IStyleProps>`
  color: ${(props) => props.color};
  font-size: 14px;
  font-weight: 600;
`

export const StatusColor = styled.div<IStyleProps>`
  background-color: ${(props) => props.background_color};
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-top: 4px;
`