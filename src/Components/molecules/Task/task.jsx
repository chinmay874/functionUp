import { useEffect, useRef, useState } from "react";
import Btn from "../../atoms/Button/button";
import {quiz} from "../../atoms/Question.js/questions";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const Task=(props)=>{
    const[currentquestion, setcurrentquestion]=useState(0);         //hold current question index value
    const[selectanswer,setselectanswer]=useState('');
    const[score,setscore]=useState(0);
    const[sec,setSec]=useState(60);
    const[min,setMin]=useState(9);


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
        if(quiz[currentquestion].key &&quiz[currentquestion].choices[selectanswer]===quiz[currentquestion].correctAnswer){
            // if(quiz[currentquestion].key){
                setscore(score+2);
               
            // }
    }
    quiz[currentquestion].key=false
}

useEffect(() => {
    const id = setTimeout(() => {
        setSec(sec - 1);
        if (sec == 1) {
            setMin(min - 1)
            if (min == 0) {
                setcurrentquestion(11)
            }
            setSec(60)
        }
    }, 1000)

    return () => {
        clearTimeout(id);
    }

}, [sec]);




    return(
        <>
        {/* <p className={props.title}>Quiz App</p> */}
        <div className={props.container}>
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
                        className={props.optionbtn }       
                        key={i} onClick={()=>setselectanswer(i)}>
                            {choices}
                        </button>
                    )
                })}
            </div>
            {
                (currentquestion<9)?(<Btn btn={props.btn} onClick={onClickNext} btn_name="Next"/>) :(<Btn btn={props.btn} onClick={onClickNext} btn_name="Submit"/>)
            }
            {/* <Btn btn={props.btn} onClick={onClickNext} btn_name="Next"/> */}
        </div>
        </>
    )
}
export default Task;