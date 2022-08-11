import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent } from 'react'
import styles from './Input.module.css'

interface Task {
  name: string
  done: boolean
}
interface InputProps {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
  newTask: string
  setNewTask: React.Dispatch<React.SetStateAction<string>>
}

export function Input({ setNewTask, setTasks, tasks, newTask }: InputProps) {
  const tasksDone = tasks.reduce(fn, 0)

  function fn(acc: number, task: Task) {
    if (task.done) return acc + 1
    return acc
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([...tasks, { name: newTask, done: false }])
    setNewTask('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }
  return (
    <>
      <form onSubmit={handleCreateNewTask} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={handleNewTaskChange}
          required
        />

        <button className={styles.inputButton} type="submit">
          Criar
          <PlusCircle className={styles.icon} size={16} color="#fafafa" />
        </button>
      </form>
      <div>
        <div className={styles.header}>
          <div className={styles.create}>
            <div className={styles.createColor}>Tarefas criadas </div>
            <div className={styles.counter}>{tasks.length}</div>
          </div>
          <div className={styles.done}>
            <div className={styles.doneColor}>Concluídas </div>
            <div className={styles.counter}>
              {tasksDone} de {tasks.length}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
