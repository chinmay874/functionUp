import { useEffect, useState } from "react";
import Btn from "../../atoms/Button/button";
import {quiz} from "../../atoms/Question.js/questions";
import styles from './task.module.css'
// import { isDisabled } from "@testing-library/user-event/dist/utils";

const Task=(props)=>{
    const[currentquestion, setcurrentquestion]=useState(0);         //hold current question index value
    const[selectanswer,setselectanswer]=useState('');
    const[score,setscore]=useState(0);
    const[sec,setSec]=useState(60);
    const[min,setMin]=useState(4);


    const onClickNext=()=>{     
        checkanswer();                            //move to next question
        if(currentquestion<quiz.length-1){
            setcurrentquestion(currentquestion + 1);
            setselectanswer('');
        } 
    }

    const checkanswer=()=>{
        
        if(quiz[currentquestion].key && quiz[currentquestion].choices[selectanswer]===quiz[currentquestion].correctAnswer){
            setscore(score+2);
    }
    quiz[currentquestion].key=false;
    }

useEffect(() => {
    const interval = setTimeout(() => {
        setSec(sec - 1);
        if (sec === 1) {
            setMin(min - 1)
            if (min === 0) {
                setcurrentquestion(10)
            }
            setSec(60)
        }
    }, 1000)
    return () => {
        clearTimeout(interval);
    }

});
function onsubmit(){
    // alert("Time Over")
    if(quiz[currentquestion].key &&quiz[currentquestion].choices[selectanswer]===quiz[currentquestion].correctAnswer){
            setscore(score+2);
}
quiz[currentquestion].key=false;
    setcurrentquestion(currentquestion + 1);
}




    return(
        <>
        {/* <p className={props.title}>Quiz App</p> */}
        <div className={props.container}>{
          ((currentquestion<10))?
       (
        <> 
        <p>{min}:{sec} min left</p>
            <div className={props.question}>
                <span id="question-no">{currentquestion+1}.</span>
                <span id="question-txt">
                {
                    quiz[currentquestion].question
                }
                </span>
            </div>
            <div className={props.option}>
                {quiz[currentquestion].choices.map((choices,i)=>{
                    return(
                        <button 
                        className={`${props.optionbtn} ${selectanswer === i ? styles.selectans : ''}`}        
                        key={i} onClick={()=>setselectanswer(i)}>
                            {choices}
                        </button>
                    )
                })}
            </div>
            {
                (currentquestion<9)?(<Btn btn={props.btn} onClick={onClickNext} btn_name="Next"/>) :(<Btn btn={props.btn} onClick={onsubmit} btn_name="Submit"></Btn>)
            }
            </>
       ):(<div className={styles.result}>Hi User, Your score is {score} out of {quiz.length*2}. You Get {(score/(quiz.length*2)*100)} percentage.
       </div>)
}
        </div>
        </>
    )
}
export default Task;