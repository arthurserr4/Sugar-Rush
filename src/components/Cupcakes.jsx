import React, { useContext } from "react"
import './style.css'
import Card from './Card'
import { DataContext } from "../context/CupcakeContext"

export default function Cupcakes() {

    const { dataCupcake, setDataCupcake } = useContext(DataContext)

    const cards = dataCupcake.map((item, index) => {
        return (
                <Card
                    key={index}
                    cupcakeName={item.cupcakeName}
                    cupcakePrice={item.cupcakePrice}
                    cupcakeDescription={item.cupcakeDescription}
                />
        )
    })
    return(
        <div className="cupcakes" >
            {cards}
        </div>
    )
}
