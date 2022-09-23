import React from "react";
import './Prix.css'

function Prix(props) {
    return (
        <React.Fragment>
            <p> Prix : {props.prix} </p>
            <button className="card-btn">Read More.....</button>
        </React.Fragment>
    );
}

export default Prix;