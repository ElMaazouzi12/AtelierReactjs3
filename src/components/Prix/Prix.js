import React from "react";

function Prix(props) {
    return (
        <div>
            <h2> Prix : {props.info.prix} </h2>
            <button>Read More</button>
        </div>
    );
}

export default Prix;