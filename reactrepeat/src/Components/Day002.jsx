import {useState} from "react"

export default function Day001() {
    const [changeColor,setChangeColor]=useState("#000000")

    function handleClick(event){
        setChangeColor(e=>event.target.value.toString())
    }

    return (
        <div>
            <div className="d-flex justify-content-centre align-item-centre ">
                <input type="color" className="color" onChange={handleClick}></input>
                <div className="container" style={{backgrounColor:changeColor}}></div>
                </div>
        </div>
    )
}