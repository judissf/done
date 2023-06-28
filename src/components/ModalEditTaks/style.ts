import { styled } from 'styled-components'
import { IStyleProps } from '../../interfaces'

export const ModalEditTaskStyle = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  max-height: 100vh;
  min-height: 1024px;
  height: 100%;
  width: 100%;
`

export const Container = styled.div<IStyleProps>`
  position: absolute;
  top: 40px;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 385px;
  border-radius: 16px;
  background-color: ${(props) => props.background_color};
  box-shadow: 0 0 4px 1px lightgray;

  .reject {
    width: 270px;
    height: 32px;
    font-size: 15px;
    font-weight: 500;
    background-color: transparent;
    border: 1px solid red;
    border-radius: 25px;
    color: red;
    transition: 0.2s;
    cursor: pointer;
    margin: 0 auto;

    &:hover {
      background-color: red;
      color: white;
    }
  }
`

export const Header = styled.div<IStyleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  width: 300px;
  height: 50px;
  border-radius: 16px 16px 0 0;

  h3 {
    color: ${(props) => props.color};
    font-weight: 500;
    font-size: 18px;
  }

  button {
    padding-left: 1px;
    padding-bottom: 1px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: ${(props) => props.background_color};
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    color: #6dd952;
    transition: 0.2s;
    border: none;
    text-decoration: none;

    &:hover {
      background: lightgrey;
    }
  }
`

export const Form = styled.form<IStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 280px;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 10px;

  .description-date {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 270px;

    label {
      font-size: 14px;
      font-weight: bold;
      color: ${(props) => props.color};
    }

    .date {
      font-size: 12px;
      width: max-content;
      color: ${(props) => props.color};
    }
  }

  textarea {
    width: 100%;
    height: 100px;
    resize: none;
    border: 1px solid transparent;
    border-radius: 8px;
    background-color: ${(props) => props.background_color};
    padding: 4px;
    color: ${(props) => props.color};
    font-size: 16px;
    font-weight: 500;
    transition: 0.2s;

    &::placeholder {
      font-weight: 500;
    }

    &:focus {
      outline: none;
      border: ${(props) => props.border_color};
    }
  }
`

export const Submit = styled.button<IStyleProps>`
  width: 100%;
  height: 32px;
  font-size: 15px;
  font-weight: 500;
  background-color: transparent;
  border: 1px solid #718e6a;
  border-radius: 25px;
  color: ${(props) => props.color};
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #718e6a;
  }
`

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  p {
    font-size: 14px;
    font-weight: bold;
    color: ${(props) => props.color};
    margin-bottom: 5px;
    cursor: default;
  }
`
