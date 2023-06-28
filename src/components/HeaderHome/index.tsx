import { Close, Content, HeaderHomeStyle } from './style'
import logo from '../../assets/logo.png'
import { useContext } from 'react'
import { Context } from '../../Context'
import { Theme } from '../ThemeHome'

export function HeaderHome() {
  const { isDarkTheme } = useContext(Context)

  return (
    <HeaderHomeStyle background_color={isDarkTheme ? '#323232' : 'white'}>
      <Content>
        <figure>
          <img src={logo} alt='Logo Done' />
        </figure>

        <Theme />

        <Close
          background_color={isDarkTheme ? '#424242' : '#F1F1F1'}
          href='/'
          onClick={() => localStorage.removeItem('@TASKS')}
        >
          X
        </Close>
      </Content>
    </HeaderHomeStyle>
  )
}
