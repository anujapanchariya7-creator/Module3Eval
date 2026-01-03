import { useState , useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login =()=>{
    const{login}=useContext(AuthContext);

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    return(

        <div className="login">
            <h2>Login</h2>
            <input placeholder="email" onChange={(e)=>
                setEmail(e.target.values)} />
           
            <input placeholder="password" onChange={(e)=>
                setPassword(e.target.values)} />

                <button onClick ={()=>
                    login(email,password)}> Login
                </button>
        </div>
    );
};
export default Login;