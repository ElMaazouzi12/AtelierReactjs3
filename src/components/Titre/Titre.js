import React from "react";
import './Titre.css'

function Titre(props) {
    return (
        <h3 className="card-title"> {props.titre} </h3>
    );
}

export default Titre;