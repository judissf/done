import { useContext } from 'react'
import { Context } from '../../Context'
import { ZeroTasksStyle } from './style'
import { WiStars } from 'react-icons/wi'

export function ZeroTasks() {
  const { isDarkTheme } = useContext(Context)

  return (
    <ZeroTasksStyle color={isDarkTheme ? 'white' : 'black'}>
      <p>
        <WiStars />
        Nenhuma tarefa
      </p>
    </ZeroTasksStyle>
  )
}
