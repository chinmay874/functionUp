import './App.css';
import { Crossbtn } from './Components/crossbtn/crossbtn';
import { useRef, useState } from 'react';

function App() {
  const[list, setlist]=useState([]);
  const ref= useRef("");
  let arr;

  function handleKeyDown(event){

    console.log(event.keyCode);
    if (event.keyCode === 13) {
      if ((ref.current.value.length) > 0) {
          arr=(ref.current.value).trim();
          setlist([...list, arr])
      }
      ref.current.value = "";
  }
}

  function deletetask(id){
    setlist(list.filter((e, i) => i !== id));
    console.log( list);
  }

  return (
    <div className="App">
      {
        list.map((e,i)=><Crossbtn key={i} onclickfun={deletetask} index={i} value={e}/>)
      }
      <input onKeyDown={handleKeyDown} ref={ref} type="text" placeholder="Add new User"  />
    </div>
  );
}

export default App;
