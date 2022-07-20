import React from "react";
import Back from "../../red-arrow-back.png";
import Foward from "../../red-arrow-foward.png";

export const Arrows = (props) => {
    const image = props.img === "Back" ? Back : Foward;
    const image_alt = props.alt === undefined ? props.img + " arrow image" : props.alt;
    
    return (
            <a href={props.link}><img src={image} alt={image_alt}/></a>
    )
}