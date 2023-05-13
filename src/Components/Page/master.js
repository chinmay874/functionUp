import { Fragment } from "react";
import { Todolist } from "../organism/todo";
import styles from './master.module.css';

export function Master(){
    return (
        <Fragment>
            <div className={styles.main}>
                <Todolist/>
            </div>
        </Fragment>
    )
}