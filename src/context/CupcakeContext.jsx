import React, { createContext, useState } from "react";
import Datacard from "../data/Datacard";

export const DataContext = createContext()
export const DataProvider=({children})=>{

    const [ dataCupcake, setDataCupcake ] = useState(Datacard)

    return(
        <DataContext.Provider value={{dataCupcake, setDataCupcake}}>
            {children}
        </DataContext.Provider>

    )
}