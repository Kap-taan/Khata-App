import { useState } from "react";
import "./DateCompo.css";

const DateCompo = () => {

    let now = new Date();

    const[hour, setHour] = useState(now.getHours());
    const[minute, setMinute] = useState(now.getMinutes());
    const[second, setSecond] = useState(now.getSeconds());

    setInterval(() => {
        now = new Date();
        setHour(now.getHours());
        setMinute(now.getMinutes());
        setSecond(now.getSeconds());
    }, 1000);

    const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    

    return (
        <div className="date__compo">
            <div className="date__parta">
                <h3>{dayName[now.getDay()]}</h3>
                <h3>{now.getDate()}</h3>
                <h3>{monthNames[now.getMonth()]}</h3>
            </div>
            <div className="date__partb">
                <h4>{hour}:{minute}:{second}</h4>
            </div>
        </div>
    );

};

export default DateCompo;