import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Recent from "./Recent";
import './MainBody.css';
import New from './NewForm';
import People from "./People";

const MainBody = (props) => {

    let title = props.title;

    return (
        <div className="mainBody">
            <h1 className="mainTitle">
                {title}
            </h1>
            {title === 'People' && <People />}
            {title === 'DashBoard' && <Dashboard />}
            {title === 'Add' && <New />}
            
        </div>
    );

};

export default MainBody;