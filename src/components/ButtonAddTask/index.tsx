import { useContext } from 'react'
import { ButtonAddTaskStyle } from './style'
import { TfiWrite } from 'react-icons/tfi'
import { Context } from '../../Context'

export function ButtonAddTask() {
  const { setShowModalAddTask } = useContext(Context)

  return (
    <ButtonAddTaskStyle onClick={() => setShowModalAddTask(true)}>
      <TfiWrite />
      Adicionar tarefa
    </ButtonAddTaskStyle>
  )
}
