import { ClipboardText, PlusCircle, Trash } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import styles from './Board.module.css'

interface Task {
  name: string
  done: boolean
}
interface BoardProps {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export function Board({ tasks, setTasks }: BoardProps) {
  function deleteTask(taskToDelete: string) {
    const taskWithoutDeleteOne = tasks.filter((task) => {
      return task.name !== taskToDelete
    })
    setTasks(taskWithoutDeleteOne)
  }

  function handleTasksDone(
    event: ChangeEvent<HTMLInputElement>,
    taskName: string
  ) {
    const newTasks = tasks.map((task) => {
      if (task.name === taskName)
        return {
          name: task.name,
          done: event.target.checked
        }

      return task
    })
    setTasks(newTasks)
  }

  if (tasks.length !== 0) {
    return (
      <>
        {tasks.map((task) => {
          return (
            <div key={task.name} className={styles.tasksList}>
              <input
                onChange={(e) => handleTasksDone(e, task.name)}
                id={task.name}
                type="checkbox"
                name={task.name}
              />

              <label className={styles.labelCheckbox} htmlFor={task.name} />

              <label htmlFor={task.name} className={styles.font}>
                {task.name}
              </label>

              <button
                className={styles.button}
                onClick={() => deleteTask(task.name)}
                title="Delete comment"
              >
                <Trash className={styles.trash} size={16} />
              </button>
            </div>
          )
        })}
      </>
    )
  }
  return (
    <>
      <div>
        <div className={styles.board}>
          <ClipboardText className={styles.icon} size={56} />
          <p className={styles.firstPhrase}>
            Você ainda não tem tarefas cadastradas
          </p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </>
  )
}
