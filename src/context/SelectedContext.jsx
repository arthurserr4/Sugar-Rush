import React, { createContext, useState } from "react";

export const SelectedContext = createContext()
export const SelectedProvider=({children})=>{

    const [selectedData, setSelectedData] = useState({
        cupcakeName: 'Nenhum',
        cupcakePrice: 0,
        cupcakeDescription: "Escolha um sabor"
    });

    return(
        <SelectedContext.Provider value={{selectedData, setSelectedData}}>
            {children}
        </SelectedContext.Provider>

    )
}