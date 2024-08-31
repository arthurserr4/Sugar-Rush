import React, { useContext, useState } from "react";
import './style.css'
import { DataContext } from "../context/CupcakeContext";


export default function NewCupcake () {

    const { dataCupcake, setDataCupcake } = useContext(DataContext);

    const [formValues, setFormValues] = useState({
        cupcakeName: '',
        cupcakePrice: '',
        cupcakeDescription: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    }

    function handleSubmit(event){
        event.preventDefault();
        setDataCupcake(prevData => [...prevData, formValues]);
        setFormValues({
            cupcakeName: '',
            cupcakePrice: '',
            cupcakeDescription: ''
        });
        console.log("Form submitted", dataCupcake);
    }

    return(
        <div className="addCupcake">
            <h1 className="form--description">Adicionar Produto</h1>
            <form className="form" onSubmit={handleSubmit}>
                 <label htmlFor="cupcakeName" className="form--label">
                    Nome do produto:
                    <input
                        type="text"
                        placeholder="Cupcake"
                        className="form--input"
                        name="cupcakeName"
                        id="cupcakeName"
                        value={formValues.cupcakeName}
                        onChange={handleChange}
                    />
                 </label>
                 <label htmlFor="cupcakePrice" className="form--label">
                    Preço:
                    <input
                        type="number"
                        placeholder="15"
                        className="form--input"
                        name="cupcakePrice"
                        id="cupcakePrice"
                        value={formValues.cupcakePrice}
                        onChange={handleChange}
                    />
                 </label>
                 <label htmlFor="cupcakeDescription" className="form--label">
                    Descrição:
                    <input
                        type="text"
                        placeholder="Um pequeno bolo"
                        className="form--input"
                        name="cupcakeDescription"
                        id="cupcakeDescription"
                        value={formValues.cupcakeDescription}
                        onChange={handleChange}
                    />
                 </label>
                 <button className="addButton" type="submit">+</button>
            </form>
        </div>
    )
}