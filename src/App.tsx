import { useState } from 'react'

import style from './App.module.css'
import { Header } from './components/Header'

import { Board } from './components/Board'

import "./global.css"

function App() {
  const [tasks, setTasks] = useState<string[]>([])

  const [newTask, setNewTask] = useState('')
return (
  <div>
  <Header />
  
  <Board 
    tasks={tasks}
    setTasks={setTasks}
    newTask={newTask}
    setNewTask={setNewTask}
  />
  </div>
)
}

export default App
