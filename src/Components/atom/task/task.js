import styles from './task.module.css'
export function Task(props){
    return(
        <p ref={props.reff} id={props.kunder} className={styles.task}>{props.value}</p>
    )
}