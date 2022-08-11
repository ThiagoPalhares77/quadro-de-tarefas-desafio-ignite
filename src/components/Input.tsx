import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent } from 'react'
import styles from './Input.module.css'

interface inputProps {
  tasks: string[]
  setTasks: React.Dispatch<React.SetStateAction<string[]>>
  newTask: string
  setNewTask: React.Dispatch<React.SetStateAction<string>>
  tasksDone: number
}

export function Input({
  setNewTask,
  setTasks,
  tasks,
  newTask,
  tasksDone
}: inputProps) {
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

        <button className={styles.inputButton} type="submit">
          Criar
          <PlusCircle className={styles.icon} size={16} color="#fafafa" />
        </button>
      </form>
      <header>
        <div className={styles.header}>
          <div className={styles.create}>
            <div className={styles.createColor}>Tarefas criadas </div>
            <div className={styles.counter}>{tasks.length}</div>
          </div>
          <div className={styles.done}>
            <div className={styles.doneColor}>Concluídas </div>
            <div className={styles.counter}>
              {tasks.length} de {tasksDone}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
