import { ClipboardText } from 'phosphor-react';
import styles from './Board.module.css';

export function Board (){
  return (
    <><header>
      <div className={styles.header}>
        <div className={styles.create}>
          <div className={styles.createColor}>Tarefas criadas </div>
          <div className={styles.counter}>0</div>
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
    </>
  )
}