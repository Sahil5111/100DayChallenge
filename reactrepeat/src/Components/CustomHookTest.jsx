import React from "react"
import useLocalStorage from "../CustomHook/useLocalStorage"

function CustomHookTest() {

    const [value, setValue] = useLocalStorage('data',{name:"",facts:""})

    return (
        <div>
            <input type="text" name="name" value={value.name} onChange={e => setValue(val=>({...val,[e.target.name]:e.target.value}))}/>
            <input type="text" name="facts" value={value.facts} onChange={e => setValue(val=>({...val,[e.target.name]:e.target.value}))}/>
        </div>
    )
}


export default CustomHookTest