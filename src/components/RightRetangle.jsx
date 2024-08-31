import React, { useState, useContext } from "react";
import './style.css'
import { SelectedContext } from "../context/SelectedContext";
import { useNavigate } from "react-router-dom";

export default function RightRetangle (){
    const [count, setCount ] = useState(1)
    const { selectedData } = useContext(SelectedContext)
    const navigate = useNavigate();

    function handleChange(event){
        setCount(Number(event.target.value))
    }

    const total = count * selectedData.cupcakePrice

    function handleClick(){
        const confirmPurchase = window.confirm(`${count} ${selectedData.cupcakeName} Cupcake\nO custo será de ${total}R$\nDeseja comprar?`);
        if (confirmPurchase) {
            alert("Compra realizada!")
            navigate('/');
            window.location.reload();
        }
    }

    return(
        <div className="right--retangle">
            <h1 className="cupcake--description">{ selectedData.cupcakeDescription }</h1>
            <div className="plusAtRight">
                <div className="cupcake--amount">
                    <label className="amount--text">Quantidade</label>
                    <select 
                        className="amount--select"
                        value={count}
                        onChange={handleChange}
                        >
                        {[1, 2, 3, 4, 5].map(num => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select>
                </div>
                <button className="addButton" onClick={handleClick}>+</button>
            </div>
            <h1 className="cupcake--totalPrice">Preço Total: {total}R$</h1>
        </div>
    )
}