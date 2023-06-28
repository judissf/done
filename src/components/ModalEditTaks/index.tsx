import { useContext } from 'react'
import { Context } from '../../Context'
import {
  ModalEditTaskStyle,
  Container,
  Form,
  Header,
  Status,
  Submit,
} from './style'
import { PriorityStatus } from '../PriorityStatus'
import { IUpdateTask } from '../../interfaces'
import { toast } from 'react-hot-toast'

export function ModalEditTask() {
  const {
    isDarkTheme,
    setShowModalEditTask,
    setUpdateTask,
    editTask,
    updateTask,
    rejectTask,
  } = useContext(Context)

  return (
    <ModalEditTaskStyle>
      <Container background_color={isDarkTheme ? '#323232' : '#fff'} 
        color={isDarkTheme ? 'red' : 'white'}
      >
        <Header
          color={isDarkTheme ? 'white' : 'black'}
          background_color={isDarkTheme ? '#424242' : '#F1F1F1'}
        >
          <h3>Editar tarefa</h3>

          <button onClick={() => setShowModalEditTask(false)}>X</button>
        </Header>

        <Form
          background_color={isDarkTheme ? '#3c3c3c' : '#f5f5f5'}
          color={isDarkTheme ? 'white' : 'black'}
          border_color={isDarkTheme ? '1px solid white' : '1px solid black'}
          onSubmit={(event) => {
            event.preventDefault()
            editTask()
            setShowModalEditTask(false)
            toast.success('Tarefa atualizada')
          }}
        >
          <div className='description-date'>
            <label htmlFor='description'>Descrição</label>
            <p className='date'>Criado em: {updateTask.createdAt}</p>
          </div>
          <textarea
            id='description'
            placeholder='Digite aqui'
            maxLength={50}
            required
            defaultValue={updateTask.description}
            onChange={(event) =>
              setUpdateTask((prev: IUpdateTask) => ({
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
            Editar
          </Submit>
        </Form>

        <button
          className='reject'
          onClick={() => {
            rejectTask(updateTask.index)
            toast('Tarefa rejeitada', { icon: '⚠️' })
            setShowModalEditTask(false)
          }}
        >
          Descartar
        </button>
      </Container>
    </ModalEditTaskStyle>
  )
}
