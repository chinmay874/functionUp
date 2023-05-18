import { useRef, useState } from "react";
import Btn from "../../atoms/Button/button";
import {quiz} from "../../atoms/Question.js/questions";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const Task=(props)=>{
    const[currentquestion, setcurrentquestion]=useState(0);         //hold current question index value
    const[selectanswer,setselectanswer]=useState('');
    const[score,setscore]=useState(0)

    const onClickNext=()=>{     
        checkanswer();                            //move to next question
        if(currentquestion<quiz.length-1){
            setcurrentquestion(currentquestion + 1);
            setselectanswer(0);
        }
        else{
            
        }
    }

    const checkanswer=()=>{
        if(quiz[currentquestion].choices[selectanswer]===quiz[currentquestion].correctAnswer){
            setscore(score+1)
    }
}

    return(
        <>
        <p className={props.title}>Quiz App</p>
        <div className={props.container}>
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
                        className={props.optionbtn }        //20.49              ${selectanswer == i ?"checked": null}`
                        key={i} onClick={()=>setselectanswer(i)}>
                            {choices}
                        </button>
                    )
                })}
            </div>
            <Btn btn={props.btn} onClick={onClickNext} btn_name="Next"/>
        </div>
        </>
    )
}
export default Task;