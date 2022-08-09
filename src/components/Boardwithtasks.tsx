import { Trash } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'
import styles from './Boardwithtasks.module.css'

interface TaskProps {
  content: string
  onDeleteTask: (task: string) => void
  task: string
  tasks: string[]
}

export function Boardwithtasks({ content, onDeleteTask, task }: TaskProps) {
  const [tasksDone, setTasksDone] = useState(0)

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  function counterTasksDone(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      setTasksDone(tasksDone + 1)
    } else {
      setTasksDone(tasksDone - 1)
    }
    console.log(tasksDone)
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
