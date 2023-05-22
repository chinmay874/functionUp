import styles from './crossbtn.module.css';



export function Crossbtn(props){
    return(
        <div className={styles.div1}>
            <p>{props.value}</p>
            <button onClick={props.onclickfun}>X</button> 
        </div>
    )
}