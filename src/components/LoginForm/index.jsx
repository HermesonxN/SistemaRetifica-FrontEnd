import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './style.css';
import motor from '../../assets/img/icons8-motor-100.png';
import axios from "axios";
import { BaseURL } from '../../utils/services';
import { useDispatch } from 'react-redux';
import { addToken } from "../../redux/slices/tokenSlice";

export default function LoginForm(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginState, setLoginState] = useState({username: '', password: ''})

    const handleChangeLogin = (event, key) => {
        setLoginState({...loginState, [key]: event.target.value});
    }

    const handleLoginForm = (event) => {
        event.preventDefault()
        try{
            axios.post(`${BaseURL}/api/login/`, loginState).then((response) => {
                axios.post(`${BaseURL}/token/`, loginState).then((response) => {
                    dispatch(addToken(response.data.access))
                    navigate('/home')
                })
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

            <form onSubmit={handleLoginForm} className="form">
                <div className="user-div main-div">
                    <label htmlFor="user" className="form-label">USUÁRIO</label>
                    <input
                        type="text"
                        value={loginState.username}
                        onChange={(event) => handleChangeLogin(event, 'username')}
                        className="form-field"
                        placeholder="Digite seu nome de usuário"
                        required
                    />
                </div>

                <div className="password-div main-div">
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