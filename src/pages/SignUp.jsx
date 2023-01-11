import React, { useState } from "react";

export function SignUp(){
    const [inputs,setInputs]=useState({login:'',password:''})
    
    

    return(
        <>
        <div>SignUp</div>
        <form>
            <p>Login:</p>
            <input type='text' value={inputs.login}
            onChange={(e)=>setInputs(({...prev,[e.target.name]:e.target.value}))}/>
            <p>Login:</p>
            <input type='text' value={inputs.password}
            onChange={(e)=>setInputs(({...prev,[e.target.name]:e.target.value}))}/>
        </form>
        </>
    )
}