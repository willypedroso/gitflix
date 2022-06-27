import React from "react";
import Back from "../../red-arrow-back.png";
import Foward from "../../red-arrow-foward.png";

export default props => {
    const image = props.img == "Back" ? Back : Foward;
    return (
            <a href={props.link}><img src={image}/></a>
    )
}