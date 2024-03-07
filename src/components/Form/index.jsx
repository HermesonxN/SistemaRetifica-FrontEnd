import React from "react";
import './style.css';
import motor from '../../assets/img/icons8-motor-100.png';

export default function Form(){
    return(
        <div className="form-component">

            <div className="form-header">
                <h1 className="form-title">TFR SISTEMA</h1>
                <img src={motor} alt="" className="form-logo" />
            </div>

            <form action="" method="POST" className="form">
                <div className="user-div">
                    <label htmlFor="user" className="form-label">USUÁRIO</label>
                    <input type="text" name="user" className="form-field" placeholder="Digite seu nome de usuário"/>
                </div>

                <div className="password-div">
                    <label htmlFor="password" className="form-label">SENHA</label>
                    <input type="password" name="password" className="form-field" placeholder="Digite sua senha"/>
                </div>

                <div className="button-div">
                    <button type="submit" className="btn">Entrar</button>
                </div>
            </form>

        </div>
    )
};