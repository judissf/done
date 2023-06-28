import { createContext, useState } from 'react'
import {
  IContext,
  IProviderProps,
  IUpdateTask,
  IUser,
  INewTask
} from '../interfaces'

export const Context = createContext<IContext>({} as IContext)

export function Provider({ children }: IProviderProps) {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)
  const [showModalAddTask, setShowModalAddTask] = useState<boolean>(false)
  const [showModalEditTask, setShowModalEditTask] = useState<boolean>(false)
  const [newTask, setNewTask] = useState<INewTask>({
    description: '',
    priority: '',
    rejected: false,
    createdAt: `${new Date().getDate()}/${
      new Date().getMonth() < 10
        ? `0${new Date().getMonth()}`
        : `${new Date().getMonth()}`
    }/${new Date().getFullYear()}`,
    done: false,
  })

  const [user, setUser] = useState<IUser>(
    JSON.parse(localStorage.getItem('@TASKS')!)
  )
  const [updateTask, setUpdateTask] = useState({} as IUpdateTask)

  const addNewTask = () => {
    const dataBase = JSON.parse(localStorage.getItem('@TASKS')!)

    dataBase.tasks.push(newTask)

    localStorage.setItem('@TASKS', JSON.stringify(dataBase))

    setUser(dataBase)
  }

  const endTask = (index: number) => {
    const dataBase = JSON.parse(localStorage.getItem('@TASKS')!)

    dataBase.tasks[index].done = true

    localStorage.setItem('@TASKS', JSON.stringify(dataBase))

    setUser(dataBase)
  }

  const rejectTask = (index: number) => {
    const dataBase = JSON.parse(localStorage.getItem('@TASKS')!)

    dataBase.tasks[index].rejected = true

    localStorage.setItem('@TASKS', JSON.stringify(dataBase))

    setUser(dataBase)
  }

  const editTask = () => {
    const dataBase = JSON.parse(localStorage.getItem('@TASKS')!)

    dataBase.tasks[updateTask.index].description = updateTask.description

    dataBase.tasks[updateTask.index].priority = updateTask.priority

    localStorage.setItem('@TASKS', JSON.stringify(dataBase))

    setUser(dataBase)
  }

  return (
    <Context.Provider
      value={{
        isDarkTheme,
        setIsDarkTheme,
        showModalAddTask,
        setShowModalAddTask,
        newTask,
        updateTask,
        setUpdateTask,
        setNewTask,
        addNewTask,
        endTask,
        editTask,
        rejectTask,
        user,
        setUser,
        showModalEditTask,
        setShowModalEditTask,
      }}
    >
      {children}
    </Context.Provider>
  )
}
