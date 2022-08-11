import { ChangeEvent, useState } from 'react'

import style from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Board } from './components/Board'

import './global.css'

interface Task {
  name: string
  done: boolean
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const [newTask, setNewTask] = useState('')

  return (
    <div>
      <Header />

      <Input
        tasks={tasks}
        setTasks={setTasks}
        newTask={newTask}
        setNewTask={setNewTask}
      />

      <Board tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App
