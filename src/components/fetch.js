import { useEffect, useState } from "react"


  export function Fetchapi(){

    const [img, setimg]=useState('')
    
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response)=>response.json())
        .then((data)=>setimg(data.message))
        console.log({img});
    },[])


    
        return(
            <img src={img} alt="" style={{height:"250px", width:"200px"}}/>

        )
    }