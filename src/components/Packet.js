import React from "react";
import './Packet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'

const Packet = (props) => {
    return (
        <div className="packet">
            <FontAwesomeIcon icon={faUserFriends} />
            <h3 className="packet__h3">{props.name}</h3>
            {/* <h4 className="packet__h4">&#x20B9; {props.amount}</h4> */}
        </div>
    );
}
 
export default Packet;