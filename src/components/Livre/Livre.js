import React from "react";
import Image from '../Image/Image';
import Titre from '../Titre/Titre';
import Prix from '../Prix/Prix';
import './Livre.css'


function Livre(props) {
    return (
        <div className='card'>
            <div className='card-header'>
                <Image url = {props.url} />
            </div>
            <div className='card-body'>
                <Titre titre = {props.titre}/>
                <Prix prix = {props.prix}/>
            </div>
        </div>
    );
}

export default Livre;