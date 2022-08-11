import { ClipboardText, PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

import styles from './Board.module.css'
import { Boardwithtasks } from './Boardwithtasks'

interface boardProps {
  tasks: string[]
  setTasks: React.Dispatch<React.SetStateAction<string[]>>
  counterTasksDone: React.Dispatch<React.SetStateAction<any>>
}

export function Board({ tasks, setTasks, counterTasksDone }: boardProps) {
  function deleteTask(taskToDelete: string) {
    const taskWithoutDeleteOne = tasks.filter((task) => {
      return task !== taskToDelete
    })
    setTasks(taskWithoutDeleteOne)
  }
  if (tasks.length != 0) {
    return (
      <>
        {tasks.map((task) => {
          return (
            <Boardwithtasks
              key={task}
              content={task}
              onDeleteTask={deleteTask}
              task={task}
              tasks={tasks}
              counterTasksDone={counterTasksDone}
            />
          )
        })}
      </>
    )
  } else {
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
}
