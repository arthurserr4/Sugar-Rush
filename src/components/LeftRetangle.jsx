import React from "react";
import Card from "./Card";
import './style.css'
import { SelectedContext } from "../context/SelectedContext";
import { useContext } from "react";

export default function LeftRetangle (){

    const { selectedData } = useContext(SelectedContext)
    return(
        <div className="left--retangle">
            <div className="card--type">
                <Card
                    cupcakeName={selectedData.cupcakeName}
                    cupcakePrice={selectedData.cupcakePrice}
                />    
            </div>
            <h1 className="total--price">{selectedData.cupcakePrice} R$</h1>
        </div>
    )
}