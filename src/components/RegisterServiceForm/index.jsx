import React, { useState } from "react";
import './style.css';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import motor from "../../assets/img/icons8-motor-100.png"
import axios from "axios";
import { BaseURL } from "../../utils/services";

export default function RegisterServiceForm(){

    const [selectedDate, setSelectedDate] = useState(null);
    const [serviceState, setServiceState] = useState({
        client_name: '',
        client_contact: '',
        head_model: '',
        start_date: '',
        order_of_service: '',
        guarantee: false,
        grind: false,
        weld: false,
        pleinar: false,
        to_wash: false,
        washclean_valves: false,
        to_polish: false
    })

    const dateFormatAux = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() +1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if(month.length < 2)
            month = '0' + month;
        if(day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    const dateFormat = (date) => {
        let rawData = date
        let formatYearMonthDay = dateFormatAux(date);
        let formatISO8601 = new Date(date).toISOString();

        return formatYearMonthDay;
    }

    const handleChangeService = (event, key) => {
        const { name, checked } = event.target

        setServiceState({
            ...serviceState, [key]: event.target.value,
            start_date: dateFormat(selectedDate),
            guarantee: name === 'guarantee' ? checked : serviceState.guarantee,
            grind: name === 'grind' ? checked : serviceState.grind,
            weld: name === 'weld' ? checked : serviceState.weld,
            pleinar: name === 'pleinar' ? checked : serviceState.pleinar,
            to_wash: name === 'to_wash' ? checked : serviceState.to_wash,
            washclean_valves: name === 'washclean_valves' ? checked : serviceState.washclean_valves,
            to_polish: name === 'to_polish' ? checked : serviceState.to_polish
        })
    }

    const handleServiceForm = (event) => {
        event.preventDefault()
        console.log(serviceState)
        try{
            axios.post(`${BaseURL}/api/register-service/`, serviceState).then((response) => {
                console.log(response.data)
            })
        }catch(err){
            console.log(err)
        }
    }
    
    return(
        <div className="RegisterServiceForm-component">
            
            <div className="formRegister-header">
                <h1 className="form-title">Registrar Serviço</h1>
                <img src={motor} alt="" className="formRegister-logo" />
            </div>

            <form onSubmit={handleServiceForm} className="form-register">

                <div className="Registersub-titles">
                    <h2>Dados do cliente</h2>
                </div>

                <div className="data-client-div main-div">
                    <div className="input-div">
                        <label htmlFor="user" className="form-label">Nome</label>
                        <input
                            type="text"
                            value={serviceState.client_name}
                            onChange={(event) => handleChangeService(event, 'client_name')}
                            className="form-field"
                            placeholder="Digite o nome do seu cliente"
                            required
                        />
                    </div>

                    <div className="input-div">
                        <label htmlFor="password" className="form-label">Contato</label>
                        <input
                            type="text"
                            value={serviceState.client_contact}
                            onChange={(event) => handleChangeService(event, 'client_contact')}
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
                            value={serviceState.head_model}
                            onChange={(event) => handleChangeService(event, 'head_model')}
                            className="form-field"
                            placeholder="Digite o nome do seu cliente"
                            required
                        />
                    </div>

                    <div className="input-div">
                        <label htmlFor="date" className="form-label">Data de ínico</label>
                        <ReactDatePicker 
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            dateFormat="dd/MM/yyyy"
                            className="form-field"
                            placeholderText="Selecione uma data"
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
                            value={serviceState.order_of_service}
                            onChange={(event) => handleChangeService(event, 'order_of_service')}
                            className="form-field"
                            placeholder="Digite o nome do seu cliente"
                            required
                        />
                    </div>

                    <div className="guarantee-div">
                        <label htmlFor="" className="form-label">Dar Garantia</label>
                        <input
                            type="checkbox"
                            name="guarantee"
                            className="guarantee-checkbox"
                            checked={serviceState.guarantee}
                            onChange={handleChangeService}
                        />
                    </div>
                </div>

                <div className="Registersub-titles">
                    <h2>Serviços realizados</h2>
                </div>

                <div className="data-service-div main-div">
                    <div className="services-div">
                        <label htmlFor="" className="form-label checkbox-label">Esmerilhar</label>
                        <label htmlFor="" className="form-label checkbox-label">Soldar</label>
                        <label htmlFor="" className="form-label checkbox-label">Pleinar</label>
                        <label htmlFor="" className="form-label checkbox-label">Lavar</label>
                        <label htmlFor="" className="form-label checkbox-label">Limpar válvulas</label>
                        <label htmlFor="" className="form-label checkbox-label">Polir</label>
                    </div>

                    <div className="services-div">
                        <input
                            type="checkbox" 
                            name="grind" 
                            className="checkbox cb-first"
                            checked={serviceState.grind}
                            onChange={handleChangeService}
                        />

                        <input
                            type="checkbox" 
                            name="weld" 
                            className="checkbox"
                            checked={serviceState.weld}
                            onChange={handleChangeService}
                        />

                        <input 
                            type="checkbox"
                            name="pleinar"
                            className="checkbox"
                            checked={serviceState.pleinar}
                            onChange={handleChangeService}
                        />

                        <input 
                            type="checkbox"
                            name="to_wash"
                            className="checkbox"
                            checked={serviceState.to_wash}
                            onChange={handleChangeService}
                        />

                        <input 
                            type="checkbox" 
                            name="washclean_valves" 
                            className="checkbox"
                            checked={serviceState.washclean_valves}
                            onChange={handleChangeService}
                        />

                        <input
                            type="checkbox"
                            name="to_polish"
                            className="checkbox"
                            onChange={handleChangeService}
                        />
                    </div>
                </div>

                <div className="formRegister-button">
                    <button type="submit" className="formRegister-btn">Registrar</button>
                </div>
            </form>
        </div>
    )
}