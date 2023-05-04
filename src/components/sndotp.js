import { useRef } from "react"


export function Mobileotp(){
    const ree =useRef('')
    function mobilecheck(){
        const number=ree.current.value;
        (number.charAt(0)>=6 && number.charAt(0)<=9 && number.length==10)?HandleOtp(Number(number)):alert("Enter a valid number");
    }
    function HandleOtp(abc){
           console.log(ree.current.value)
            const url= "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP"
            const body = {mobile:abc}
        
            const option={
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(body),
            }
        
            fetch(url,option)
            .then(()=>{alert("Otp Send") 
                ree.current.value=''})

            .catch((error)=> console.log(error))
            //setmobileno()
          }
    

    return(
        <>
            <input type="number" ref={ree} style={{width:'150px', borderWidth:"1px",marginTop:'20px'}}/>
            <button onClick={mobilecheck} style={{height:'20px', width:'120px'}}>Send Otp</button>
        </>
    )
    }