import React, { useState } from "react";
import './style.css';
import axios from "axios";
import { BaseURL } from "../../utils/services";

export default function ConsultForm(){

    const [OS, setOS] = useState('')
    const [searchService, setSearchService] = useState([]);

    const handleSearchService = (event) => {
        event.preventDefault();
        try{
            axios.get(`${BaseURL}/api/search/${OS}/`).then((response) => {
                setSearchService(response.data)
            })
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div className="consultForm-component">
            <div className="consultForm-header">
                <h1>Consulte seus serviços realizados</h1>
            </div>

            <form className="search-form" onSubmit={handleSearchService}>
                <div>
                    <input
                        type="text" 
                        value={OS}
                        onChange={(e) => setOS(e.target.value)}
                        className="search-bar" 
                        placeholder="Digite a OS do serviço concluído"
                    />
                </div>
                <div>
                    <button type="submit" className="search-btn btn">Pesquisar</button>
                </div>
            </form>

            <div className="service-completed main-div">

                {
                    searchService.map((service) => {
                        return(
                            <div className="service-box" key={service.order_of_service}>
                                <h3 className="serviceCompleted-title">Informações do cliente</h3>
                                <div className="client-infos">
                                    <p>Cliente: {service.client_name}</p>
                                    <p>Modelo: {service.head_model}</p>
                                    <p>Garantia: <span className="span-guarantee">{service.guarantee} Meses</span></p>
                                    <p>Ordem de serviço: {service.order_of_service}</p>
                                    <p>Data de ínicio: {service.start_date}</p>
                                </div>
                            </div>  
                        )
                    })
                } 
            </div>
        </div>
    )
}