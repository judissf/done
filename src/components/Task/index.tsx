import { useContext } from 'react'
import {
  TaskStyle,
  Status,
  Description,
  ButtonDone,
  Container,
  Date,
} from './style'
import { Context } from '../../Context'
import { GiCheckMark } from 'react-icons/gi'
import { ITask } from '../../interfaces'
import { toast } from 'react-hot-toast'

export function Task({ priority, description, index, createdAt }: ITask) {
  const { isDarkTheme, endTask, setShowModalEditTask, setUpdateTask } =
    useContext(Context)

  return (
    <TaskStyle
      background_color={isDarkTheme ? '#191919' : 'white'}
      box_shadow={isDarkTheme ? '0 0 2px 1px #6DD952' : '0 0 2px 1px #718E6A'}
      border_color={isDarkTheme ? '1px solid #718E6A' : '1px solid #C7C7C7'}
      border_color_hover={
        isDarkTheme ? '1px solid #6DD952' : '1px solid #718E6A'
      }
    >
      <Container
        onClick={() => {
          setUpdateTask({ priority, description, index, createdAt })
          setShowModalEditTask(true)
        }}
      >
        <Status
          background_color={
            priority == 'alta'
              ? '#FF0000'
              : priority == 'media'
              ? '#ffd900'
              : '#3083FF'
          }
        />

        <Description color={isDarkTheme ? 'white' : 'black'}>
          {description}
        </Description>

        <Date color={isDarkTheme ? 'white' : 'black'}>{createdAt}</Date>
      </Container>

      <ButtonDone
        onClick={() => {
          endTask(index!)
          toast.success('Tarefa concluída')
        }}
      >
        <span>
          <GiCheckMark />
        </span>
      </ButtonDone>
    </TaskStyle>
  )
}
