import './App.css';
import { useState } from 'react';
import { Usercard } from './components/usercard/usercarddata';

function App() {

    const [userData, setUserData]=useState([]);

    async function Userdata(){
       const response= await fetch("https://reqres.in/api/users/")
       const data= await response.json()
       console.log(data.data)
        setUserData(data.data)
        
    }
    function Getuser(){
        Userdata();
        
    }


    return (
    <div className="App">
      
      <button onClick={Getuser}>Get user</button>
      {
        userData.map((userdata)=> <Usercard userData={userdata} key={userdata.id}/>)
        
      }
      
  
    </div>
  );
}

export default App;
