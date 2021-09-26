import React, {useState} from "react";
import './style.css'
import image from '../../image/login.png'
import { MdEmail, MdLock } from "react-icons/md";
import {HiEye, HiEyeOff} from "react-icons/hi";

export default () =>{

const[email, setEmail] = useState("");
const[senha, setSenha] = useState("");
const[show, setShow] = useState(false);

const handleEmail = (e) =>{
    setEmail(e.target.value)
}
const handleSenha = (e) =>{
    setSenha(e.target.value)
}
const handleClick = ()=>{
    setShow(!show)
}
    return(
        <div className="login">
            <div className="login-logo"> 
                <img src={image}/>
            </div>
            <div className="login-inputs">
                <h1>Fazer login</h1>

                <div className="login-email">
                    <MdEmail/>
                    <input type="email" placeholder="Digite um email" value={email} onChange={handleEmail}/>
                </div>

                <div className="login-senha">
                    <MdLock/>
                    <input type={show ? "text" : "password"} placeholder="Digite uma senha" value={senha} onChange={handleSenha}/>
                    <div className="show-senha">
                    {show ? <HiEye onClick={handleClick}/> : <HiEyeOff onClick={handleClick}/>}
                    </div>
                </div>

                <button className="logar" type="submit">FAZER LOGIN</button>
                <h4>Não tenho conta</h4>
                <button type="submit"> Fazer Cadastro</button> 
                
            </div>
        </div>
    );
}