import { Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Tasks.module.css";

interface TaskProps{
  content: string;
  onDeleteTask: (task: string) => void;
  task: string;
  tasks: string[];
}

export function Tasks ({content, onDeleteTask, task}: TaskProps) {

  function handleDeleteTask(){
    onDeleteTask(content);
  }
  
  
    
      return (
    
    <div className={styles.tasksList}>
      <input id={task} type="checkbox" name={task} /> 
        <label htmlFor={task}></label>
        <span className={styles.font}>{content}</span>
          
      <button className={styles.button} onClick={handleDeleteTask} title="Delete comment"> 
      <Trash className={styles.trash} size={16}/>
      </button>
    </div>
      )}
      
       





