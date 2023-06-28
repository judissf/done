import { useContext } from 'react'
import { Context } from '../../Context'
import {
  ModalAddTaskStyle,
  Container,
  Form,
  Header,
  Status,
  Submit,
} from './style'
import { PriorityStatus } from '../PriorityStatus'
import { INewTask } from '../../interfaces'
import { toast } from 'react-hot-toast'

export function ModalAddTask() {
  const { isDarkTheme, setShowModalAddTask, setNewTask, addNewTask } = useContext(Context)

  return (
    <ModalAddTaskStyle>
      <Container background_color={isDarkTheme ? '#323232' : '#fff'}>
        <Header
          color={isDarkTheme ? 'white' : 'black'}
          background_color={isDarkTheme ? '#424242' : '#F1F1F1'}
        >
          <h3>Nova tarefa</h3>

          <button onClick={() => setShowModalAddTask(false)}>X</button>
        </Header>

        <Form
          background_color={isDarkTheme ? '#3c3c3c' : '#f5f5f5'}
          color={isDarkTheme ? 'white' : 'black'}
          border_color={isDarkTheme ? '1px solid white' : '1px solid black'}
          onSubmit={(event: { preventDefault: () => void }) => {
            event.preventDefault()
            addNewTask()
            setShowModalAddTask(false)
            toast.success('Tarefa criada')
          }}
        >
          <label htmlFor='description'>Descrição</label>
          <textarea
            id='description'
            placeholder='Digite aqui em no máximo 50 caracteres'
            maxLength={50}
            required
            onChange={(event) =>
              setNewTask((prev: INewTask) => ({
                ...prev,
                description: event.target.value,
              }))
            }
          />

          <Status color={isDarkTheme ? 'white' : 'black'}>
            <p>Status de prioridade</p>

            <PriorityStatus
              id='high'
              priority='Alta'
              value='alta'
              priority_color='#FF0000'
            />
            <PriorityStatus
              id='medium'
              priority='Média'
              value='media'
              priority_color='#ffd900'
            />
            <PriorityStatus
              id='low'
              priority='Baixa'
              value='baixa'
              priority_color='#3083FF'
            />
          </Status>

          <Submit
            type='submit'
            background_color={isDarkTheme ? '#3c3c3c' : '#F2F2F2'}
            color={isDarkTheme ? 'white' : 'black'}
          >
            Criar
          </Submit>
        </Form>
      </Container>
    </ModalAddTaskStyle>
  )
}
