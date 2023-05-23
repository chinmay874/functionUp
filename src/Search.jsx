import { useEffect, useState } from 'react';
import './Search.css';
export function Search(){
    const[data,setData]=useState([]);
    const [filterData,setFilterData]=useState([]);
    const [searchvalue, setsearchvalue]=useState('');

    useEffect(()=>{
        fetch('http://cdn-api.co-vin.in/api/v2/admin/location/states')
        .then(res => res.json())
        .then(res=> {
            console.log(res);
            setFilterData(res.states);
        })
        .catch(err=> console.log(err));
    },[])

    
    const handleFilter=(value)=>{
        setsearchvalue(value);
        const response= filterData.filter(f => (f.state_name.toLowerCase().includes(value)))
        setData(response);
        console.log(data)
    }
    return(
    <div className='Search-container'>
        <div className="search">
            <input type="text" placeholder="Search here..." onChange={e =>handleFilter(e.target.value)}/>
        </div>
        {
            (searchvalue)?(<div className='search-result'>
            {
            data.map((d,i)=>( 
                <div key={i}>{d.state_name}</div>
            ))}
        </div>):("")
        }
        
    </div>
    )
}