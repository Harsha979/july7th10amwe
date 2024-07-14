import React, { useState } from "react";
import LoginPage from "./Login";
import NavBar from "./NavBar";
function RegisterPage(){
    const [registerUserName,setUserName]=useState("")
    const [registerPassword,setPassword]=useState("")
    const [mobileNumber,setMobileNumber]=useState("")
    const [address,setAddress]=useState("")
    const [enableLogin,setEnableLogin]=useState(false)

    function checkRegisterDetails(){
        if(registerUserName !== ""){
            if(registerPassword !== ""){
                    if(mobileNumber !== ""){
                            if(address !== ""){
                                    alert("Registration Sucess")
                                    setEnableLogin(true)
                            }else{
                                alert("address is required")
                            }
                    }
                    else{
                        alert("mobile number is required")
                    }
            }else{
                alert("password is required")
            }
        }else{
            alert("username is required")
        }
    }

    return(
        <div>
            <NavBar/>
        <div style={{display:"grid",placeContent:"center"}}>
            <h1>Register Page</h1>
            <label>username</label>
            <input type="text" value={registerUserName} onChange={(e)=>{setUserName(e.target.value)}}></input>
            <label>password</label>
            <input type="password" value={registerPassword} onChange={(e)=>{setPassword(e.target.value)}}></input>
            <label>mobile number</label>
            <input type="text" value={mobileNumber} onChange={(e)=>{setMobileNumber(e.target.value)}}></input>
            <label>address</label>
            <input type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}}></input>
            <button onClick={()=>{checkRegisterDetails()}}>Register</button>
            {enableLogin ? <LoginPage registerUserName={registerUserName} registerPassword={registerPassword}/> : null }
        </div>
        </div>
    )
}

export default RegisterPage;