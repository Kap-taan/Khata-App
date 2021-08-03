import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faUsers, faPlus, faQuestionCircle, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import "./Navbar.css";

const Navbar = (props) => {

    let title = 'DashBoard';
    const [selected, setSelected] =  useState('DashBoard');

    const optionHandler = (clickedTitle) => {
        console.log(clickedTitle);
        props.addTitle(clickedTitle);
        setSelected(clickedTitle);
    }


    return (
        <div className="navbar">
            <div className="navbar__img">
            <FontAwesomeIcon icon={faBookOpen} />
            </div>
            <div className="navbar__options">
                <div className={`navbar__option ${selected === 'DashBoard' ? 'special' : ''}`} onClick={() => optionHandler('DashBoard')}>
                    <FontAwesomeIcon icon={faChartLine} />
                    <h4>DASHBOARD</h4>
                </div>
                <div className={`navbar__option ${selected === 'People' ? 'special' : ''}`} onClick={() => optionHandler('People')}>
                    <FontAwesomeIcon icon={faUsers} />
                    <h4>People</h4>
                </div>
                <div className={`navbar__option ${selected === 'Add' ? 'special' : ''}`} onClick={() => optionHandler('Add')}>
                    <FontAwesomeIcon icon={faPlus} />
                    <h4>Add</h4>
                </div>
                <div className={`navbar__option ${selected === 'Help' ? 'special' : ''}`} onClick={() => optionHandler('Help')}>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    <h4>Help</h4>
                </div>
            </div>
        </div>
    );

};

export default Navbar;