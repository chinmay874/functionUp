import { useState, useRef, useEffect } from "react";

export default function Imageslide(){

    let [index, setindex]=useState(0)
    let [url, seturl]=useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRin-RHdvU8GYNk8I2YPre0yYYHCJlY9GuAbsYmBF-AOTXZQXEOrOjF-etRUFagA9Gx0NE&usqp=CAU")
    
    let reference=useRef(null)

    let arr=["https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_RqqGeCTSgIemhRLpiVAch5r-R-v0ryV3iwNYiiP5cO6btNX0RmNWIWiiR2nRfpxpHKc&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbWN6Mo7az66M7iRQYwsAuTKhEfHFInhxpdcSjk2iByMBm2gyVbJ-p19L1WfDbaxBKIQ&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJgXdJFKPaGovDGHAn3BD-F0yLE_BNDpIKoJ_3EKer-1CIMvE2stBgxPTOqz6wE_E9Lo&usqp=CAU",]

    useEffect(()=>{
            reference.current.src=url
    },[url])

    function handlebutton(){
        if (index>=3){
            setindex(0)
            seturl(arr[index])
        }
        else{
        setindex(index+1)
        seturl(arr[index])
        }
        console.log(index);
        
    }

    return(
        <>
        <img style={{height:"200px", width:"200px"}} src="" ref={reference} alt=""/>
        <button onClick={handlebutton}>Image Change</button>
        </>
    )
}