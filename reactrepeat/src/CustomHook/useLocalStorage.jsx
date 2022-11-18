import React from "react"


function getValue(key,initialvalue) {
    const value=JSON.parse(localStorage.getItem(key))
    if(value) return value

    if (initialvalue instanceof Function) return initialvalue()
    return initialvalue
}

function useLocalStorage(key,initialvalue) {
    const [value,setValue]=React.useState(()=>{
        return getValue(key,initialvalue)
    })

    React.useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[value])

    return [value,setValue]
}


export default useLocalStorage