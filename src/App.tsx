import { ChangeEvent, useState } from 'react'

import style from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Board } from './components/Board'

import './global.css'

function App() {
  const [tasks, setTasks] = useState<string[]>([])

  const [newTask, setNewTask] = useState('')

  const [tasksDone, setTasksDone] = useState(0)

  function counterTasksDone(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      setTasksDone(tasksDone + 1)
    } else {
      setTasksDone(tasksDone - 1)
    }
  }
  return (
    <div>
      <Header />

      <Input
        tasks={tasks}
        setTasks={setTasks}
        newTask={newTask}
        setNewTask={setNewTask}
        tasksDone={tasksDone}
      />

      <Board
        tasks={tasks}
        setTasks={setTasks}
        counterTasksDone={counterTasksDone}
      />
    </div>
  )
}

export default App
