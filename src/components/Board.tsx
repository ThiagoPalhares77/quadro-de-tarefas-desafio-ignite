import { ClipboardText, PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

import styles from './Board.module.css';
import { Tasks } from './Tasks';

interface boardProps {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
  setTasksCounter: React.Dispatch<React.SetStateAction<number>>;
  tasksCounter: number;
}

export function Board ({tasks, setTasks, setTasksCounter, tasksCounter}: boardProps) {  
  
 

  function deleteTask(taskToDelete: string) {
    const taskWithoutDeleteOne = tasks.filter(task => {
      return task !== taskToDelete;
      
    })
    setTasks(taskWithoutDeleteOne);
    setTasksCounter((state)=>{
      return state - 1;
    })
  }
 if (tasksCounter != 0)  { 
  return (
    <>
        <div className={styles.tasksList}>
        {tasks.map(task =>{
          return(
            <Tasks
              key={task}
              content={task}
              onDeleteTask={deleteTask} 
              task={task} 
              tasks={tasks}          />
            
          )
        })}
        
      </div>
        </>
    ) } else {
      return(
        <>
    <div>
      <div className={styles.board}>
        <ClipboardText className={styles.icon} size={56} />
        <p className={styles.firstPhrase}>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
    </>
      )
    }
      
    
}
