import { useNavigate, useParams } from "react-router-dom"
import json from '../data.json'
import { useEffect, useState } from "react"
export default function Country(){
    const [res,setRes] = useState([])
    const {country} = useParams()
    const navitage = useNavigate()
    useEffect(()=>{
          json.forEach((e)=>{
        if(e.name == country){
            setRes([e])
        }
    })  
    },[])
    console.log(res)
   return(
    <div className="country">
        <button className="back" onClick={()=>{navitage(`/`)}}>Back</button>
            <div className="grid-container">
        {res.length>0 && <> <div className="flag">
        <img src={res[0].flag} alt="Flag"/>
    </div>
    <div className="details">
        <div className="title">{res[0].name}</div>
        <ul className="details-list">
            <li><strong>Native Name:</strong> {res[0].nativeName}</li>
            <li><strong>Population:</strong> {res[0].population}</li>
            <li><strong>Region:</strong>{res[0].region}</li>
            <li><strong>Sub Region:</strong> {res[0].subregion}</li>
            <li><strong>Capital:</strong> {res[0].capital}</li>
            <li><strong>Top Level Domain:</strong> {res[0].topLevelDomain}</li>
            <li><strong>Currencies:</strong> {res[0].currencies[0].name}</li>
            <li><strong>Languages:</strong>{res[0].languages.map((e)=> <span key={e}>{e.name}  </span>)}</li>
        </ul>
        <div className="border-countries">
            <strong>Border Countries:</strong>{ res[0].borders && res[0].borders.map((e)=>{
                return <span key={e}>{e} , </span>
            })}</div>
        </div></>}
   
</div>
    </div>


   )
}