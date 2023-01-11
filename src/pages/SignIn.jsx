import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {}from '../store/profile/actions'

export function SignIn() {
    const [inputs, setInputs] = useState({ login: '', password: '' })
    const [err, setErr] = useState('');

    const navigate = useNavigate()
    const dispach=useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputs.login === 'Pavel' && inputs.password === 'Smi') {
            dispach(isAuth(true))
            navigate('/')
            console.log('OK')
        } else {
            setErr('Login and Password no true')
            console.log('false')
            setInputs({login: '', password: ''})
        }
    }

    return (
        <>
            <div>SignUp</div>
            <form onSubmit={handleSubmit}>
                <p>Login:</p>
                <input type='text' name="login" value={inputs.login}
                    onChange={(e) => setInputs((prev)=>({ ...prev, [e.target.name]: e.target.value }))} />
                <p>Password:</p>
                <input type='text' name="password" value={inputs.password}
                    onChange={(e) => setInputs((prev)=>({ ...prev, [e.target.name]: e.target.value }))} />
                <button>Login</button>
            </form>
            {err && <p>{err}</p>}
        </>
    )
}