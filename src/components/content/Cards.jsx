import React from "react";
import './Cards.css'

export default props => {
    return (
        <a href={props.link}>
            <div id="Cards">
                    <h2>{props.content}</h2>
            </div>
        </a>
    )
}