import { Context } from '../../Context'
import { Theme } from '../ThemeStart'
import { HeaderStartStyle } from './style'
import { useContext } from 'react'

export function HeaderStart() {
  const { isDarkTheme } = useContext(Context)

  return (
    <HeaderStartStyle background_color={isDarkTheme ? '#323232' : 'white'}>
      <Theme />
    </HeaderStartStyle>
  )
}
