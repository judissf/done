import { useContext } from 'react'
import { Context } from '../../Context'
import { CountTasksStyle } from './style'

export function CountTasks() {
  const {isDarkTheme, user} = useContext(Context)

  return (
    <CountTasksStyle
    color={isDarkTheme ? 'white' : 'black'}>
      <p className='total-done'>
        Total de tarefas <strong>concluídas</strong>: {user.tasks.filter((task) => task.done == true).length}
      </p>
      <p className='total-rejected'>
        Total de tarefas <strong>rejeitadas</strong>: {user.tasks.filter((task) => task.rejected == true).length}
      </p>
    </CountTasksStyle>
  )
}
