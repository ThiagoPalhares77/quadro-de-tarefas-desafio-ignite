import styles from './Input.module.css';
import {PlusCircle} from 'phosphor-react';

export function Input() {

  function handleCreateNewTask () {
    event?.preventDefault()
    console.log('oi')
  }

  return(
    <form onSubmit={handleCreateNewTask} className={styles.test}>
      <input 
      className={styles.input}
      type="text" 
      placeholder='Adicione uma nova tarefa'
    />
    <button type='submit'>
      Criar<PlusCircle className={styles.icon} size={16} color="#fafafa" /></button>
    </form>
  )
}