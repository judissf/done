import { Context } from '../../Context'
import { useContext } from 'react'
import { PriorityStatusStyle, InputRadio, Label, StatusColor } from './style'
import { IPriority, ITask, IUpdateTask } from '../../interfaces'

export function PriorityStatus({ id, priority, value, priority_color }: IPriority) {
  const { setNewTask, setUpdateTask, isDarkTheme } = useContext(Context)

  return (
    <PriorityStatusStyle>
      <InputRadio
        onClick={event => {
          setNewTask((prev: ITask) => ({...prev, priority: event.target.value}))
          setUpdateTask((prev: IUpdateTask) => ({...prev, priority: event.target.value}))}
        }
        value={value}
        type='radio'
        id={id}
        name='status'
        required
      />

      <div className='label-status-color'>
        <Label htmlFor={id} color={isDarkTheme ? 'white' : 'black'}>{priority}</Label>

        <StatusColor background_color={priority_color} />
      </div>

    </PriorityStatusStyle>
  )
}
