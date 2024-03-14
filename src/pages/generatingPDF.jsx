import React from "react";
import PDF from "../components/PDF";

export default function GeneratingPDF(){
    return(
        <PDF
            model="Fire 1.0"
            value="500"
            manufacturer="Fiat"
            date="04/02/2024"
        />
    )
}