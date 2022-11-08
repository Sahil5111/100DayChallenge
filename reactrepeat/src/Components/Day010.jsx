import { useState } from "react"


export default function Clock(){
    const [time,setTime]=useState()
    setInterval(()=>{
        let date = new Date
        let hour = (date.getHours()%12).toString()
        let minute =date.getMinutes().toString()
        let seconds = date.getSeconds().toString()
        setTime(()=>hour+":"+minute+":"+seconds)
    },1000)
    return (
        <div>{time}</div>
    )
}