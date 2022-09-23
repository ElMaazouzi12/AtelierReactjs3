import React from "react";

function Image(props) {
    return (
        <img src={props.info.url} alt={props.info.titre}/>
    );
}

export default Image;