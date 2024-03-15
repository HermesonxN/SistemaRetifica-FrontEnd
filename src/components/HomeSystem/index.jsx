import React, { useEffect } from "react";
import './style.css';
import { GrMoney, GrLogout } from "react-icons/gr";
import { GiArchiveRegister } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BaseURL } from "../../utils/services";
import axios from "axios";

export default function HomeSystem(){

    const token = useSelector(state => state.tokenStore.token)
    const navigate = useNavigate();

    useEffect(() => {
        console.log(token)
        security(token)
    }, [token])

    const security = (token) => {
        if(!token){
            navigate('/')   
        }
    }

    const handleLogout = () => {
        try{
            axios.get(`${BaseURL}/api/logout/`)
            .then(response => {
                navigate('/')
            })
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div className="homeSystem-component">
            <nav className="navbar">
                <ul className="menu">
                    <li><a href="/budget"><GrMoney /> Fazer Orçamento</a></li>
                    <li><a href="/register-service"><GiArchiveRegister /> Registrar Serviço</a></li>
                    <li><a href="/consult-service"><FaSearch /> Consultar Serviços</a></li>
                    <li><a onClick={handleLogout}><GrLogout /> Sair</a></li>
                </ul>
            </nav>
        </div>
    )
}