import styles from './card.module.css'
export function Card({data}){

    return(
        <div className={styles.Card}>
            <img className={styles.img} src={data.image} alt="logo"/>
            <h4 className={styles.heading}>{data.name}</h4>
            <h4 className={styles.heading}>{data.position}</h4>
            <h4 className={styles.heading}>{data.company}</h4>
        </div>
    )
}