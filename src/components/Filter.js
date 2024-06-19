import { useContext, useEffect, useRef, useState } from "react"
import {context} from '../App'
import json from '../data.json'
export default function Filter(){
    const hidden = useRef(null)
    const [arr,setArr] = useContext(context)
    const [hid,setHid] = useState(true)
    function change (e){     
      const  countries = []
        if(e.length>0){
       json.forEach((r)=>{
        if(r.name.slice(0,e.length).toLowerCase() == e.toLowerCase()){
            countries.push(r)
        }
       })
       setArr(countries)
        } else{
            setArr(json)
        }

    }
    function select (){
        if(hid){
            hidden.current.style.display = `block`    
            setHid(!hid)   
        } else{
            hidden.current.style.display = `none`    
         setHid(!hid)
        }

    }
    function click(e){
        let newArr = []
       let children = [...e.parentElement.children] 
       children.forEach((x)=>{
        x.classList.remove(`active`)
       })
       e.classList.add(`active`)
        json.forEach((r)=>{
            if(r.region ==e.innerHTML){
                newArr.push(r)
            }
            setArr(newArr)
        })
    }
    return(
        <div className="filter">
            <div className="container">
                <input type="text" placeholder="   Search for country" onInput={(e)=>{change(e.currentTarget.value)}}/>
                <div className="select" >
                    <p onClick={select}>Filter by Region</p>
                    <div className="hidden"ref={hidden}>
                        <ul className="hiddenUl">
                            <li onClick={(e)=>{click(e.currentTarget)}}>Africa</li>
                            <li onClick={(e)=>{click(e.currentTarget)}}>Americas</li>
                            <li onClick={(e)=>{click(e.currentTarget)}}>Asia</li>
                            <li onClick={(e)=>{click(e.currentTarget)}}>Europe</li>
                            <li onClick={(e)=>{click(e.currentTarget)}}>Oceania</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}