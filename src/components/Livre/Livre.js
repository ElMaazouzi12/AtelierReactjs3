import React from "react";
import Image from '../Image/Image';
import Titre from '../Titre/Titre';
import Prix from '../Prix/Prix';


function Livre(props) {
    return (
        <div className='col-md-4 col-sm-6'>
            <div className='card'>
                <div className='card-header'>
                    <Image url = {props.info.url} />
                </div>
                <div className='card-body'>
                    <Titre titre = {props.info.titre}/>
                    <Prix prix = {props.info.prix}/>
                </div>
            </div>
        </div>
    );
}

export default Livre;