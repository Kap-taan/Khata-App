import React from "react";
import TotalAmount from "./TotalAmount";
import './Dashboard.css';
import Recent from "./Recent";
import TotalMembers from './totalMembers';

const Dashboard = () => {

    return(
        <div className="dashboard">
            <TotalAmount />
            <Recent />
            <TotalMembers />
        </div>
    );

};

export default Dashboard;