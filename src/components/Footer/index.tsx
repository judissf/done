import { useContext } from 'react'
import { Context } from '../../Context'
import { FooterStyle } from './style'

export function Footer() {
  const { isDarkTheme } = useContext(Context)

  return (
    <FooterStyle
      background_color={isDarkTheme ? '#323232' : 'white'}
      color={isDarkTheme ? 'white' : 'black'}
    >
      <p>
        Desenvolvido por
        <a
          href='https://www.linkedin.com/in/fullstack-filipe-judiss-albuquerque/'
          target='_blank'
        >
          {' '}
          Filipe
        </a>
      </p>
    </FooterStyle>
  )
}
