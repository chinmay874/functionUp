import {useRef} from "react";

export function Filepicker(){
    let fileselector=useRef(null)

    function handleFile(){
        fileselector.current.click();
        // console.log(fileselector.current.files[0])
    } 


    return(
        <div>
            <input type="file" ref={fileselector} style={{}}/>
            <button style={{marginTop:'100px',height:'40px', width:'250px'}} onClick={handleFile}>Pick the file</button>
        </div>
    )
}

// useEffect (()=>{ return (()=>{console.log("clean up")})})