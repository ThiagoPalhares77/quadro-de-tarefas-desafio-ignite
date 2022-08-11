import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent } from 'react'
import styles from './Input.module.css'

interface inputProps {
  setTasksCounter: React.Dispatch<React.SetStateAction<number>>
  tasks: string[]
  setTasks: React.Dispatch<React.SetStateAction<string[]>>
  newTask: string
  setNewTask: React.Dispatch<React.SetStateAction<string>>
  tasksCounter: number
  tasksDone: number
}

export function Input({
  setTasksCounter,
  setNewTask,
  setTasks,
  tasks,
  newTask,
  tasksCounter,
  tasksDone
}: inputProps) {
  function handleTasksSum() {
    setTasksCounter((state) => state + 1)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([...tasks, newTask])
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

        <button
          onClick={handleTasksSum}
          className={styles.inputButton}
          type="submit"
        >
          Criar
          <PlusCircle className={styles.icon} size={16} color="#fafafa" />
        </button>
      </form>
      <header>
        <div className={styles.header}>
          <div className={styles.create}>
            <div className={styles.createColor}>Tarefas criadas </div>
            <div className={styles.counter}>{tasksCounter}</div>
          </div>
          <div className={styles.done}>
            <div className={styles.doneColor}>Concluídas </div>
            <div className={styles.counter}>
              {tasksCounter} de {tasksDone}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
