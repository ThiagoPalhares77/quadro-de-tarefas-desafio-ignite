import { useState } from 'react'

import style from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Board } from './components/Board'

import "./global.css"

function App() {
  const [tasks, setTasks] = useState<string[]>([])

  const [newTask, setNewTask] = useState('')

  const [tasksCounter, setTasksCounter] = useState(0)
return (
  <div>
  <Header />

  <Input
   tasks={tasks}
   setTasks={setTasks}
   newTask={newTask}
   setNewTask={setNewTask}
   setTasksCounter={setTasksCounter}
   tasksCounter={tasksCounter}
   />

  <Board 
    tasks={tasks}
    setTasks={setTasks}
    setTasksCounter={setTasksCounter}
    tasksCounter={tasksCounter}
  />
  </div>
)
}

export default App
