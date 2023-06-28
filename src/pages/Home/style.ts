import { styled } from 'styled-components'
import { IStyleProps } from '../../interfaces'

export const HomeStyle = styled.main<IStyleProps>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-width: 100vw;
  width: 100%;
  min-height: 100vh;
  max-height: 1024px;
  height: 100%;
  transition: 0.2s;
  background-color: ${(props) => props.background_color};
  `

export const Container = styled.section<IStyleProps>`
  display: flex;
  flex-direction: column;
  max-width: 1220px;
  width: 100%;
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
  background-color: transparent;
  transition: 0.2s;
`

export const User = styled.h1<IStyleProps>`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.color};
  cursor: default;
  margin-bottom: 42px;
`

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 50px auto;
  cursor: default;
  color: ${(props) => props.color};
`

export const ToDoList = styled.ul<IStyleProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 6px;
  max-width: 1180px;
  width: 100%;
  height: 450px;
  padding: 4px 3px 0;
  border-radius: 25px;
  background-color: ${(props) => props.background_color};
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 26px;
  transition: 0.2s;

  &::-webkit-scrollbar {
    width: 3px;
    background-color: transparent;
    border-radius: 0px 25px 25px 25px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 25px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background-color: #6DD952;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #718E6A;
    border-radius: 20px;
  }
`
