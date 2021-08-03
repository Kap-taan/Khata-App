import React, { useEffect } from "react";
import './TotalAmount.css';
import Typewriter from "typewriter-effect";
import db from '../firebase/config';
import { useState } from "react/cjs/react.development";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons'

const TotalAmount = () => {

    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        let amount = 0;
        db.collection('money').get().then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                amount = amount + doc.data().amount;
            });
            console.log(amount);
            setTotalAmount(amount);
        });

    });

    return (
        <div className="totalAmount">
            <div className="totalAmount__title">
                {/* <h5>Total Amount</h5> */}
                <FontAwesomeIcon icon={faMoneyCheckAlt} />
            </div>
            <div className="totalAmount_data">
            
            <Typewriter
  
                onInit={(typewriter)=> {

                typewriter
                
                .typeString("Amount to Gather")
                    
                .pauseFor(1000)
                .deleteAll()
                .typeString("Amount: ")
                .start();
                }}
            />
            <h4>Rs {totalAmount}</h4>
            </div>
        </div>
    );
}
 
export default TotalAmount;