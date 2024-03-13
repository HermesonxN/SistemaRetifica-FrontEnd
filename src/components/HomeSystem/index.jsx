import React, { useEffect } from "react";
import './style.css';
import { GrMoney, GrLogout } from "react-icons/gr";
import { GiArchiveRegister } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function HomeSystem(){

    const token = useSelector(state => state.tokenStore.token)
    const navigate = useNavigate();

    useEffect(() => {
        console.log(token)
        if(!token){
            navigate('/')
        }
    }, [])

    return(
        <div className="homeSystem-component">
            <nav className="navbar">
                <ul className="menu">
                    <li><a href="/budget"><GrMoney /> Fazer Orçamento</a></li>
                    <li><a href="/register-service"><GiArchiveRegister /> Registrar Serviço</a></li>
                    <li><a href="/consult-service"><FaSearch /> Consultar Serviços</a></li>
                    <li><a href="/logout"><GrLogout /> Sair</a></li>
                </ul>
            </nav>
        </div>
    )
}