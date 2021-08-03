import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import db from "../firebase/config";
import Packet from "./Packet";
import './Recent.css';

const Recent = () => {

    // const info = [
    //     {name: 'Anuj', amount: 1000},
    //     {name: 'Tushar', amount: 2000},
    //     {name: 'Pulkit', amount: 3000},
    //     {name: 'Vansh', amount: 4000}
    // ];

    const [info, setInfo] = useState([]);

    useEffect(() => {

        db.collection('customers').get().then((snapshot) => {
            let count = 0;
            let temp = [];
            snapshot.docs.forEach((doc) => {
                count++;
                if(count <= 5){
                    temp = [
                        ...temp,
                        doc.data().name
                    ]
                }
                
            });
            setInfo(temp);
            console.log(info);
        }, []);

    });

    return (
        <div className="recent">
            <div className="recent__title">
                <h3>Recent</h3>
            </div>
            <div className="recent__data">
                {info.map((data) => (
                    <Packet name={data} key={Math.round()} />
                ))}
            </div>
        </div>
    );
}
 
export default Recent;