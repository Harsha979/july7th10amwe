import React, { useState } from "react";
import NavBar from "./NavBar";

function LoginPage(props){
    const [loginUserName,setUserName]=useState("")
    const [loginPassword,setPassword]=useState("")

    function checkLoginDetails(){
        if(loginUserName === props.registerUserName){
                if(loginPassword === props.registerPassword){
                    alert("Login Sucess")
                }else{
                    alert("password is not matching with register page")
                }
        }else{
            alert("username is not matching with register page")
        }
    }

    return(
        <div>
            <NavBar/>
        <div style={{display:"grid",placeContent:"center"}}>
            {/* {props.registerUserName+props.registerPassword} */}
            <h1>Login Page</h1>
            <label>username</label>
            <input type="text" value={loginUserName} onChange={(e)=>{setUserName(e.target.value)}}></input>
            <label>password</label>
            <input type="password" value={loginPassword} onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button onClick={()=>{checkLoginDetails()}}>Login</button>
        </div>
        </div>
    )
}

export default LoginPage;