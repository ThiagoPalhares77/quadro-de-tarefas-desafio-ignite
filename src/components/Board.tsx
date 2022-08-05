import { ClipboardText, PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

import styles from './Board.module.css';
import { Tasks } from './Tasks';

interface boardProps {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
  newTask: string;
  setNewTask: React.Dispatch<React.SetStateAction<string>>;
}

export function Board ({tasks, setTasks, setNewTask, newTask}: boardProps) {  
 

  const [tasksCounter, setTasksCounter] = useState(0)

  function handleCreateNewTask(event: FormEvent ){
    event.preventDefault()

    setTasks([...tasks, newTask]);
    setNewTask('')
  }
  
  function handleNewTaskChange (event: ChangeEvent <HTMLInputElement>){
    setNewTask(event.target.value);
  }

  function deleteTask(taskToDelete: string) {
    const taskWithoutDeleteOne = tasks.filter(task => {
      return task !== taskToDelete;
      
    })
    setTasks(taskWithoutDeleteOne);
    setTasksCounter((state)=>{
      return state - 1;
    })
  }


  function handleTasksSum() {
    setTasksCounter ((state)=> state + 1)
  }

  
  return (
    <>
    <form onSubmit={handleCreateNewTask} className={styles.test}>
      <input 
      className={styles.input}
      type="text" 
      placeholder='Adicione uma nova tarefa'
      value={newTask}
      onChange={handleNewTaskChange}
      required
    />
 
    <button onClick={handleTasksSum} className={styles.inputButton} type='submit'>
      Criar<PlusCircle className={styles.icon} size={16} color="#fafafa" /></button>
    </form>
    <header>
      <div className={styles.header}>
        <div className={styles.create}>
          <div className={styles.createColor}>Tarefas criadas </div>
          <div className={styles.counter}>{tasksCounter}</div>
        </div>
        <div className={styles.done}>
          <div className={styles.doneColor}>Concluídas </div>
          <div className={styles.counter}>0</div>
        </div>
      </div>
    </header>
    <footer>
      
        
     
      <div className={styles.board}>
        <ClipboardText className={styles.icon} size={56} />
        <p className={styles.firstPhrase}>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </footer>
      
      <div className={styles.tasksList}>
        {tasks.map(task =>{
          return(
            <Tasks
              key={task}
              content={task}
              onDeleteTask={deleteTask}     
            />
            
          )
        })}
        
      </div>
    </>
  )
}