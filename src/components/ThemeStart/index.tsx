import { useContext } from 'react'
import { Context } from '../../Context'
import { HiSun } from 'react-icons/hi'
import { FiMoon } from 'react-icons/fi'
import { ThemeStyle } from './style'

export function Theme() {
  const { isDarkTheme, setIsDarkTheme } = useContext(Context)

  return (
    <ThemeStyle
      onClick={() => setIsDarkTheme(!isDarkTheme)}
      right={isDarkTheme ? '2px' : '28px'}
    >
      <span>{isDarkTheme ? <FiMoon /> : <HiSun />}</span>
    </ThemeStyle>
  )
}
