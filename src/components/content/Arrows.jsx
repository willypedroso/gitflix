import React from "react";
import { RiArrowGoBackFill, RiArrowGoForwardFill } from "react-icons/ri";

export const Arrows = (props) => {
    
    return (
            <a href={props.link}>{props.img === "Back" ?
                <abbr title="Go Back">
                    <RiArrowGoBackFill style={{position: "absolute", left: "10%", fontSize: "2rem", color: "red"}}/>
                </abbr> :
                <abbr title="Go Foward">
                    <RiArrowGoForwardFill style={{position: "absolute", right: "10%", fontSize: "2rem", color: "red"}}/></abbr>}</a>
                
    )
}