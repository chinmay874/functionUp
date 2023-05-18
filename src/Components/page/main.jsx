import Task from '../molecules/Task/task';
import styles from './main.module.css';
const Quiz=()=>{
    return(
        <div className={styles.main}>
            <Task title={styles.title} container={styles.container} question={styles.question} option={styles.option} btn={styles.btn} optionbtn={styles.optionbtn}/>
        </div>
    )
}
export default Quiz;