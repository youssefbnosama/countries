import { useEffect, useState } from "react"
export default function Navbar(){
    const [isBlack,setIsBlack]= useState(false)
    function toggle (){
        if(isBlack){
            document.body.style.backgroundColor = `white`
            document.body.style.color = `black`
            setIsBlack(false)
        } else if(isBlack != true) {
            document.body.style.backgroundColor = `black`
            document.body.style.color = `white`
            setIsBlack(true)
        }
    }
    return(
        < div className="navbar">
            <div className="container">
            <h2>Where in the world?</h2>
            <p onClick={toggle}>Dark mode</p> 
            </div>

        </div>
    )
}