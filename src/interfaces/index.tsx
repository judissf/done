export interface IProviderProps {
  children: React.ReactNode;
}

export interface IContext {
  isDarkTheme: boolean
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>
  showModalAddTask: boolean
  setShowModalAddTask: React.Dispatch<React.SetStateAction<boolean>>
  showModalEditTask: boolean
  setShowModalEditTask: React.Dispatch<React.SetStateAction<boolean>>
  newTask: INewTask
  setNewTask: React.Dispatch<React.SetStateAction<INewTask>>
  updateTask: IUpdateTask
  setUpdateTask: React.Dispatch<React.SetStateAction<IUpdateTask>>
  addNewTask: () => void
  endTask: (index: number) => void
  editTask: () => void
  rejectTask: (index: number) => void
  user: IUser
  setUser: React.Dispatch<React.SetStateAction<IUser>>
}

export interface IUser {
  user: string
  tasks: ITask[]
}

export interface ITask {
  description: string
  priority: string
  done: boolean
  rejected: boolean
  createdAt: string
  index: number
}

export interface INewTask {
  description: string
  priority: string
  done: boolean
  rejected: boolean
  createdAt: string
}

export interface IUpdateTask {
  description: string
  priority: string
  index: number
  createdAt: string
} 

export interface IPriority {
  id: string
  value: string
  priority: string
  priority_color: string
}

export interface IStyleProps {
  background_color?: string
  right?: string
  color?: string
  box_shadow?: string
  border_color?: string
  border_color_hover?: string
}
