import { Fragment, useRef } from "react";
import styles from'./showtask.module.css';
import { Buttoncomplete } from "../../atom/buttoncomplete/buttoncomplete";
import {Task} from '../../atom/task/task';
import {BtnCross} from "../../atom/buttoncross/buttoncross";


export function Showtask(props){

    const textunder = useRef("");
    
    function clickunderline() {
       
        //console.log( textunder.current.id)
        textunder.current.style.textDecoration = 'line-through';

        if (props.taketru[textunder.current.id]) {                      //tru take true false when click on cross
            props.taketru[textunder.current.id] = false;
            props.setcountstate(props.countstate - 1);                  //here textunder.current.id   store the id of task
            
        }

    }

    return(
        <Fragment>
            <div className={styles.list}>
                <Task reff={textunder} kunder={props.k} value={props.value}/>
                <Buttoncomplete onclickunder={clickunderline} value="Complete"/>
                <BtnCross kindex={props.k} btnclick={props.Click2} />
            </div>
        </Fragment>
    )

}