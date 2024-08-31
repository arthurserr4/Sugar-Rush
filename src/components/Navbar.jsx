import React from "react"
import './style.css'
import { Link } from "react-router-dom"

export default function Navbar() {
    return(
        <div className="navbar">
            <h2 className="navbar--title">Sugar Rush</h2>
            <h3 className="navbar--choice">
                <Link to='/Sugar-Rush' className="navbar--home">Home</Link> | <Link to='/Sugar-rush/Cart' className="navbar--cart">Carrinho</Link>
            </h3>
        </div>
    )
}
