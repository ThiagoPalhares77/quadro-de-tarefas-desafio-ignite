import { Circle, Trash } from "phosphor-react";
import styles from "./Tasks.module.css";

interface TaskProps{
  content: string;
  onDeleteTask: (task: string) => void;
}

export function Tasks ({content, onDeleteTask}: TaskProps) {
  
  function handleDeleteTask(){
    onDeleteTask(content)
  }
  
  return (
  <ul>
    <li>
      <button> <Circle /></button>
      <a>{content}</a>
      <button onClick={handleDeleteTask} title="Delete comment"> 
      <Trash size={24}/>
      </button>
    </li>
  </ul>
  )
}