import styles from "./buttoncross.module.css";


export function BtnCross({ kindex, btnclick }){
    return(
        <button onClick={()=>btnclick(kindex)}
        className={styles.btn}>X</button>
    )
}