import { styled } from "styled-components";

export const ButtonAddTaskStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: transparent;
  border-radius: 25px;
  width: 240px;
  height: 42px;
  border: 1px solid #718E6A;
  cursor: pointer;
  transition: 0.2s;
  font-weight: bold;
  font-size: 16px;
  color: #718E6A;

  svg {
    font-size: 24px;
    color: #718E6A;
    transition: 0.2s;
  }

  &:hover {
    background-color: #718E6A;
    color: white;

    svg {
      color: white;
    }
  }
`