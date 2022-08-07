import { Circle, Trash } from "phosphor-react";
import styles from "./Tasks.module.css";

interface TaskProps{
  content: string;
  onDeleteTask: (task: string) => void;
}

export function Tasks ({content, onDeleteTask}: TaskProps) {
  
 

  function handleDeleteTask(){
    onDeleteTask(content);
  }
  
  return (
    <ul className={styles.list}>
    <li className={styles.itenList}>
      <input type="checkbox" className={styles.circle} /> 
      <label className={styles.font}>{content}</label>
      <button className={styles.button} onClick={handleDeleteTask} title="Delete comment"> 
      <Trash className={styles.trash} size={16}/>
      </button>
    </li>
  </ul>
  )
}




