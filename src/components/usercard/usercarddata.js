import './usercarddata.css'



   export function Usercard(props)
   {
        
    const{
        id,
        email,
        first_name,
        last_name,
        avatar
    }=props.userData
    
        return(
            <div id="div1">
                <img id='img1' src={avatar} alt="" />
                <p>UniqueId:{id}</p>
                <p>First Name: {first_name}</p>
                <p>Last Name: {last_name}</p>
                <p>Email:{email}</p>
                
            </div>
        )
    }