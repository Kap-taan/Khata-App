import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import "./Navdetails.css";


const Navdetails = () => {

    return (
        <div className="navdetails">
            
            <div className="bell">
                <FontAwesomeIcon icon={faBell} />
            </div>
            <div className="message">
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
            </div>
            <div className="person__details">
                <FontAwesomeIcon icon={faBell} />
            </div>
        </div>
    );

};

export default Navdetails;