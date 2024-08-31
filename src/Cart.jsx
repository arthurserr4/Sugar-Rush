import React from "react";

import Navbar from "./components/Navbar"
import CartBackground from "./components/CartBackground";

export default function Cart(){
    document.title="Carrinho"
    return(
        <div>
            <Navbar />
            <CartBackground/>
        </div>
    )
}