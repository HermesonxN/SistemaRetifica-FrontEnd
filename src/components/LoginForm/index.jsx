import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './style.css';
import motor from '../../assets/img/icons8-motor-100.png';
import axios from "axios";
import {BaseURL} from '../../utils/services';

export default function Form(){

    const [loginState, setLoginState] = useState({username: '', password: ''})
    const navigate = useNavigate();

    const handleChangeLogin = (event, key) => {
        setLoginState({...loginState, [key]: event.target.value});
    }

    const handleLoginForm = (event) => {
        try{
            event.preventDefault()
            axios.post(`${BaseURL}/api/login/`, loginState)
            .then((response) => {
                navigate('/home')
            });
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div className="form-component">

            <div className="form-header">
                <h1 className="form-title">TFR SISTEMA</h1>
                <img src={motor} alt="" className="form-logo" />
            </div>

            <form action="" onSubmit={handleLoginForm} className="form">
                <div className="user-div">
                    <label htmlFor="user" className="form-label">USUÁRIO</label>
                    <input
                        type="text"
                        value={loginState.user}
                        onChange={(event) => handleChangeLogin(event, 'username')}
                        className="form-field"
                        placeholder="Digite seu nome de usuário"
                        required
                    />
                </div>

                <div className="password-div">
                    <label htmlFor="password" className="form-label">SENHA</label>
                    <input
                        type="password"
                        value={loginState.password}
                        onChange={(event) => handleChangeLogin(event, 'password')}
                        className="form-field"
                        placeholder="Digite sua senha"
                        required
                    />
                </div>

                <div className="button-div">
                    <button type="submit" className="btn">Entrar</button>
                </div>
            </form>

        </div>
    )
};