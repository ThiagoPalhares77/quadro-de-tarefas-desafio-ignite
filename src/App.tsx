import { ChangeEvent, useState } from 'react'

import style from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Board } from './components/Board'

import './global.css'

interface AppProps {
  handleDeleteTask: React.Dispatch<React.SetStateAction<any>>
}
function App({ handleDeleteTask }: AppProps) {
  const [tasks, setTasks] = useState<string[]>([])

  const [newTask, setNewTask] = useState('')

  const [tasksCounter, setTasksCounter] = useState(0)

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
        setTasksCounter={setTasksCounter}
        tasksCounter={tasksCounter}
        tasksDone={tasksDone}
      />

      <Board
        tasks={tasks}
        setTasks={setTasks}
        setTasksCounter={setTasksCounter}
        tasksCounter={tasksCounter}
        counterTasksDone={counterTasksDone}
      />
    </div>
  )
}

export default App
