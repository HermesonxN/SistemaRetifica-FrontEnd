import React from "react";
import './style.css';
import motor from "../../assets/img/icons8-motor-100.png"

export default function RegisterServiceForm(){
    return(
        <div className="RegisterServiceForm-component">
            
            <div className="formRegister-header">
                <h1 className="form-title">Registrar Serviço</h1>
                <img src={motor} alt="" className="formRegister-logo" />
            </div>

            <form className="form-register">

                <div className="Registersub-titles">
                    <h2>Dados do cliente</h2>
                </div>

                <div className="data-client-div main-div">
                    <div className="input-div">
                        <label htmlFor="user" className="form-label">Nome</label>
                        <input
                            type="text"
                            className="form-field"
                            placeholder="Digite o nome do seu cliente"
                            required
                        />
                    </div>

                    <div className="input-div">
                        <label htmlFor="password" className="form-label">Contato</label>
                        <input
                            type="text"
                            className="form-field"
                            placeholder="Digite o contato do seu cliente"
                            required
                        />
                    </div>
                </div>

                <div className="data-motor-div main-div">
                    <div className="input-div">
                        <label htmlFor="car-model" className="form-label">Modelo do cabeçote</label>
                        <input
                            type="text"
                            className="form-field"
                            placeholder="Digite o nome do seu cliente"
                            required
                        />
                    </div>

                    <div className="input-div">
                        <label htmlFor="date" className="form-label">Data de ínico</label>
                        <input
                            type="date"
                            className="form-field"
                            required
                        />
                    </div>
                </div>

                <div className="Registersub-titles">
                    <h2>Dados empresariais</h2>
                </div>

                <div className="data-business-div main-div">
                    <div className="input-div">
                        <label htmlFor="car-model" className="form-label">Ordem de serviço (OS)</label>
                        <input
                            type="text"
                            className="form-field"
                            placeholder="Digite o nome do seu cliente"
                            required
                        />
                    </div>

                    <div className="guarantee-div">
                        <label htmlFor="" className="form-label">Dar Garantia</label>
                        <input type="checkbox" className="guarantee-checkbox"/>
                    </div>
                </div>

                <div className="Registersub-titles">
                    <h2>Serviços realizados</h2>
                </div>

                <div className="data-service-div main-div">
                    <div className="services-div">
                        <label htmlFor="" className="form-label checkbox-label">Teste</label>
                        <label htmlFor="" className="form-label checkbox-label">Teste</label>
                        <label htmlFor="" className="form-label checkbox-label">Teste</label>
                        <label htmlFor="" className="form-label checkbox-label">Teste</label>
                        <label htmlFor="" className="form-label checkbox-label">Teste</label>
                        <label htmlFor="" className="form-label checkbox-label">Teste</label>
                    </div>

                    <div className="services-div">
                        <input type="checkbox" className="checkbox cb-first"/>
                        <input type="checkbox" className="checkbox"/>
                        <input type="checkbox" className="checkbox"/>
                        <input type="checkbox" className="checkbox"/>
                        <input type="checkbox" className="checkbox"/>
                        <input type="checkbox" className="checkbox"/>
                    </div>
                </div>

                <div className="formRegister-button">
                    <button type="submit" className="formRegister-btn">Registrar</button>
                </div>
            </form>
        </div>
    )
}