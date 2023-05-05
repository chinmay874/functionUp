import { useEffect, useState } from "react"
import axios from "axios";


  export function Fetchapi(){
    const [img, setimg]=useState()

    // async function waitapi(){
    //     const ruko= await fetch("https://dog.ceo/api/breeds/image/random")
    //     const data= await ruko.json()
    //     setimg(data.message)
    // }
    
    
    
    useEffect(()=>{
       // waitapi()
       axios.get("https://dog.ceo/api/breeds/image/random")
       .then((response)=>setimg(response.data.message))
    },[])


    // useEffect(()=>{
    //      fetch("https://dog.ceo/api/breeds/image/random")
    //     .then((response)=>response.json())
    //     .then((data)=>setimg(data.message))
    // },[])
    
        return(
            <img src={img} alt="" style={{height:"250px", width:"200px"}}/>

        )
    }