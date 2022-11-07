import {useState} from "react"

export default function Day001() {
    const [changeColor,setChangeColor]=useState("#000000")

    function handleClick(event){
        setChangeColor(()=>event.target.value.toString())
        console.log(changeColor)
    }
    return (
        <div>
            <div className="d-flex justify-content-centre align-item-centre ">
                <input type="color" className="color" onChange={handleClick}></input>
                <div className="container diplay--color border" style={{backgroundColor:changeColor}}></div>
                </div>
        </div>
    )
}