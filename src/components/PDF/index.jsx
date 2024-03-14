import React, { useState } from "react";
import './style.css';
import logo from "../../assets/img/icons8-motor-100.png"
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function PDF(props){

    const [loader, setLoader] = useState(false);

    const downloadPDF = () =>{
        const capture = document.querySelector('.actual-receipt');
        setLoader(true);
        html2canvas(capture).then((canvas)=>{
        const imgData = canvas.toDataURL('img/png');
        const doc = new jsPDF('p', 'mm', 'a4');
        const componentWidth = doc.internal.pageSize.getWidth();
        const componentHeight = doc.internal.pageSize.getHeight();
        doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
        setLoader(false);
        doc.save('receipt.pdf');
        })
    }

    return(
        <div className="wrapper">

      <div className="receipt-box">

          {/* actual receipt */}
          <div className="actual-receipt">

            {/* organization logo */}
            <div className="receipt-organization-logo">
              <img alt="logo" src={logo} />
            </div>

            {/* organization name */}
            <h5>Torre Forte Retifica</h5>

            {/* street address and unit number */}
            <h6>
              Rua Doralice Costa
              {' '}
              621
            </h6>

            {/* city province postal code */}
            <h6>
              Fortaleza
              {' '}
              60810-680
            </h6>

            {/* email-phone-and-website */}
            <div className="phone-and-website">
              <p>
                <a href={`mailto:jonaspinheiro@gmail.com`}>
                    jonaspinheiro@gmail.com
                </a>
              </p>
              <p>85 9.9999-9999</p>
                  
              <p>
                <a
                  href="https://www.youtube.com/@torreforteretifica5794"
                  target="blank"
                >
                  https://www.youtube.com/@torreforteretifica5794
                </a>
              </p>
                  
            </div>

            <div className="colored-row first">
              <span>Cliente</span>
              <span>Contato</span>
            </div>

            <div className="data-row">
              <span className="font-weight">Xavin Xavesco do Xavão</span>
              <span className="font-weight">(85) 9.9999-9999</span>
            </div>

            <div className="colored-row">
              <span>Modelo do cabeçote</span>
              <span>Fabricante</span>
            </div>

            <div className="data-row">
              <span className="font-weight">{props.model}</span>
              <span className="font-weight">{props.manufacturer}</span>
            </div>

            <div className="colored-row">
              <span>Data que o cabeçote chegou</span>
            </div>

            <div className="data-row">
              <span className="font-weight">{props.date}</span>
            </div>

            <div className="colored-row">
              <span>Serviço a ser realizado</span>
            </div>

            <div className="data-row border-bottom">
              <span>
                <span className="font-weight">Descabonização</span>
                </span>R$89.90<span>
              </span>
            </div>
            <div className="data-row border-bottom">
              <span>
                <span className="font-weight">Esmerilhação</span>
                </span>R$89.90<span>
              </span>
            </div>
            <div className="data-row border-bottom">
              <span>
                <span className="font-weight">Lavagem</span>
                </span>R$89.90<span>
              </span>
            </div>
            <div className="data-row border-bottom">
              <span>
                <span className="font-weight">Pleina</span>
                </span>R$89.90<span>
              </span>
            </div>

            <div className="data-row border-bottom">
              <span className="font-weight">Valor total: {props.value}</span>
            </div>
            <div className="colored-row">
              <span>Obrigado pela preferência!</span>
            </div>

          </div>
          {/* end of actual receipt */}

          {/* receipt action */}
          <div className="receipt-actions-div">
            <div className="actions-right">
              <button
                className="receipt-modal-download-button"
                onClick={downloadPDF}
                disabled={!(loader===false)}
              >
                {loader?(
                  <span>Downloading</span>
                ):(
                  <span>Download</span>
                )}

              </button> 
            </div>
          </div>

      </div>
      
    </div>
    )
}