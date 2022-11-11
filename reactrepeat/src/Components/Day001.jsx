import { useState } from "react";

export default function Day001() {
    const [data, setData] = useState({ name: "Sahil", email: "", phone: "", date: "", password: "", check: true })

    function change(event) {
        setData(() => {
            return {
                ...data,
                [event.target.name]: event.target.name === "check" ? event.target.checked : event.target.value
            }
        })
    }

    function submit() {
        sessionStorage.setItem("data", JSON.stringify(data))
    }


    return (
        <div className="container my-5 py-0">

            <legend>Form</legend>
            <input type="text" placeholder="Name" name="name" value={data.name} onChange={change} /><hr></hr>
            <input type="tel" placeholder="Phone" name="phone" value={data.phone} onChange={change} /><hr></hr>
            <input value={data.email} type="email" placeholder="Email" name="email" onChange={change} /><hr></hr>
            <input type="date" value={data.value} name="date" onChange={change} /><hr></hr>
            <input type="checkbox" checked={data.check} id="check" name="check" onChange={change} /> <label htmlFor="check">checkbox</label><hr></hr>
            <input type="password" value={data.password} placeholder="" name="password" onChange={change} /><hr></hr>
            <button onClick={submit} className="btn btn-primary">submit</button>
        </div>
    )
}
