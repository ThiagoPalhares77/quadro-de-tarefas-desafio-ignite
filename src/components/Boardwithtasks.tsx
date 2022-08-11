import { Trash } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'
import styles from './Boardwithtasks.module.css'

interface TaskProps {
  content: string
  onDeleteTask: (task: string) => void
  task: string
  tasks: string[]
  counterTasksDone: React.Dispatch<React.SetStateAction<any>>
}

export function Boardwithtasks({
  content,
  onDeleteTask,
  task,
  counterTasksDone
}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(content)
  }

  return (
    <div className={styles.tasksList}>
      <input
        onChange={counterTasksDone}
        id={task}
        type="checkbox"
        name={task}
      />

      <label htmlFor={task}></label>

      <span className={styles.font}>{content}</span>

      <button
        className={styles.button}
        onClick={handleDeleteTask}
        title="Delete comment"
      >
        <Trash className={styles.trash} size={16} />
      </button>
    </div>
  )
}
