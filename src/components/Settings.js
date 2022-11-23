import React, { useState } from "react"
import { useContext } from "react"
import { UserContext } from "../context/userContext"

export const Settings = () => {

    // to be implemented in context
    const {greeting,setGreeting} = useContext(UserContext)
    const [val,setVal] = useState('')
    const changeHandler =(e)=>{
        setGreeting(e.target.value);
        setVal(e.target.value)
    }

    return (
        <div style={{ border: '5px solid red', padding: '8px' }} id="settings">
            <h4>Settings</h4>
            <input type={'text'} value={val} onChange={changeHandler}/>
        </div>
    )
}