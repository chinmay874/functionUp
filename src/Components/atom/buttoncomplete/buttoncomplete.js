import styles from './buttoncomplete.module.css';

export function Buttoncomplete({onclickunder,value}){
    return(
        <button onClick={onclickunder} className={styles.condition}>{value}</button>
    )
}