import {useState} from "react"
import "./login.css"

export default function App() {

    const [form,setForm]=useState({
        email:"",password:"",cPassword:"",check:true
    })
    function handlechange(event){
        let target = event.target
        setForm(()=>{
            return {
                ...form,
                [target.name]:target.name === "check" ? target.Checked : target.value
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        form.password=== form.cPassword?console.log("Successfully signed up"):console.log("passwords do not match")
        form.password=== form.cPassword&&form.check && console.log("thanks for signing up for our newsletter!")
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    value={form.email}
                    onChange={handlechange}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    value={form.password}
                    onChange={handlechange}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    name="cPassword"
                    className="form--input"
                    value={form.cPassword}
                    onChange={handlechange}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="check"
                        checked={form.check}
                        onChange={handlechange}
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
