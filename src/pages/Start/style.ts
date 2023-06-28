import { styled } from 'styled-components'
import { IStyleProps } from '../../interfaces'

export const StartStyle = styled.main<IStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.background_color};
  padding-top: 22px;
  transition: 0.2s;

  figure {
    margin-bottom: 22px;
  }
`

export const Title = styled.h1<IStyleProps>`
  color: #6dd952;
  font-size: 22px;
  cursor: default;
  margin-bottom: 22px;

  span {
    font-weight: bold;
    color: ${(props) => props.color};
    font-size: 22px;
  }
`

export const Form = styled.form<IStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 125px;
  width: 200px;
  margin-bottom: 25px;

  label {
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => props.color};
  }

  input {
    height: 32px;
    border-radius: 2px;
    border: 1px solid #718e6a;
    padding-left: 3px;
    transition: 0.2s;
    background-color: ${(props) => props.background_color};
    color: ${(props) => props.color};
    font-weight: 400;
    font-size: 14px;

    &:focus {
      outline: none;
      border: 1px solid #6dd952;
    }
  }
`

export const ButtonStart = styled.button`
  color: white;
  background-color: #6dd952;
  width: 100px;
  height: 42px;
  border-radius: 25px;
  text-transform: uppercase;
  font-weight: bold;
  transition: 0.2s;
  cursor: pointer;
  /* border: ; */

  &:hover {
    background-color: #718e6a;
  }
`
export const Warning = styled.p<IStyleProps>`
  width: 320px;
  height: 155px;
  text-transform: uppercase;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 25px;
  color: ${(props) => props.color};

  &::selection {
    background-color: black;
    color: white;
  }

  &::after,
  &::before {
    display: block;
    content: '';
    width: 320px;
    height: 4px;
    border-radius: 25px;
    background-color: #718e6a;
    margin-top: 12px;
    margin-bottom: 12px;
  }
`
