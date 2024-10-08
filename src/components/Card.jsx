import React, { useContext } from "react"
import './style.css'
import { Link } from "react-router-dom"
import { SelectedContext } from "../context/SelectedContext"

export default function Card(props) {

const { setSelectedData } = useContext(SelectedContext)

function handleSelect(){
    setSelectedData(({
        cupcakeName: props.cupcakeName,
        cupcakePrice: props.cupcakePrice,
        cupcakeDescription: props.cupcakeDescription,
    }));
}

    return(
        <Link to='/Sugar-Rush/cart' onClick={handleSelect}>
            <div className="card">
                <img src="https://clipart-library.com/images_k/cupcake-silhouette-png/cupcake-silhouette-png-16.jpg" className="card--image" alt="Cupcake" />
                <h3 className="card--text">{props.cupcakeName}</h3>
            </div>
        </Link>
    );
}
