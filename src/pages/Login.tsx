import React, {FC} from 'react'
import { useNavigate } from 'react-router-dom'

const Login: FC = () => {
    const nav = useNavigate()
    return (
        <>
        <div>Login</div>
        <button onClick={()=>{nav(-1)}}>Back</button>
        </>
    )
}

export default Login