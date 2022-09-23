import React from "react";

function Image(props) {
    return (
        <img style={{width:'100%'}} src={props.url} alt={props.titre}/>
    );
}

export default Image;