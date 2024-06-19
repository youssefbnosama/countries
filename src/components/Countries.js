import { createContext, useContext, useState } from 'react'
import { context } from '../App'
import { useNavigate } from 'react-router-dom'
export default function Countries(){
    let [arr,setArr] = useContext(context)
    let navigate = useNavigate()
    function nav (e){
        navigate(`/${e}`)
    }
    return(
        <div className='countries'>
             {arr.map((e)=>{
                 return(
                 <div className="card" key={e.name} onClick={()=>{nav(e.name)}}>
        <img src={e.flag} alt="Nature"/>
         <div className="card-content">
             <h3>{e.name}</h3>
             <ul>
                <li><strong>Population:</strong> {e.population}</li>
                 <li><strong>Region:</strong> {e.region}</li>
                 <li><strong>Capital:</strong> {e.capital}</li>
             </ul>
        </div>
    </div>   
                 ) 
            })}
            
        </div>
    
    )
}