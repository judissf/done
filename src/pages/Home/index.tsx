import { useContext } from 'react'
import { HeaderHome } from '../../components/HeaderHome'
import { HomeStyle, User, Title, ToDoList, Container } from './style'
import { Context } from '../../Context'
import { ButtonAddTask } from '../../components/ButtonAddTask'
import { Task } from '../../components/Task'
import { ModalAddTask } from '../../components/ModalAddTask'
import { Navigate } from 'react-router-dom'
import { ITask } from '../../interfaces'
import { ZeroTasks } from '../../components/ZeroTasks'
import { ModalEditTask } from '../../components/ModalEditTaks'
import { Footer } from '../../components/Footer'
import { CountTasks } from '../../components/CountTasks'

export function Home() {
  const { isDarkTheme, showModalAddTask, showModalEditTask, user } = useContext(Context)

  return user != null ? (
    <>
      {showModalAddTask && <ModalAddTask />}
      {showModalEditTask && <ModalEditTask />}
      <HeaderHome />
      <HomeStyle background_color={isDarkTheme ? '#323232' : 'white'}>
        <Container background_color={isDarkTheme ? '#323232' : 'white'}>
          <User color={isDarkTheme ? 'white' : 'black'}>Olá, {user.user}</User>

          <ButtonAddTask />

          <Title color={isDarkTheme ? 'white' : 'black'}>
            lista de tarefas
          </Title>

          <ToDoList
            background_color={
              isDarkTheme ? 'rgba(55, 55, 55, 0.8)' : '#f5f5f5'
            }
          >
            {user.tasks.filter((task) => task.done == false && task.rejected == false).length != 0 ? (
              user.tasks.map(
                (task: ITask, index: number) =>
                  (task.done == false && task.rejected == false) && (
                    <Task
                      index={index}
                      priority={task.priority}
                      description={task.description}
                      done={task.done}
                      rejected={task.rejected}
                      createdAt={task.createdAt}
                    />
                  )
              )
            ) : (
              <ZeroTasks />
            )}
          </ToDoList>

          <CountTasks />
        </Container>
      </HomeStyle>
      <Footer />
    </>
  ) : (
    <Navigate to={'/'} />
  )
}
