import React from "react";
import LeftRetangle from "./LeftRetangle";
import RightRetangle from "./RightRetangle";

export default function CartBackground (){
    return(
        <div className="cart--background">
            <LeftRetangle/>
            <RightRetangle/>
        </div>
    )
}