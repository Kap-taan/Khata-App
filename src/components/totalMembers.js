import React, { useEffect } from "react";
import './TotalAmount.css';
import Typewriter from "typewriter-effect";
import db from '../firebase/config';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'


const TotalMembers = () => {

    const [totalM, setTotalM] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        let temp2 = 0;
        db.collection('customers').get().then((snapshot) => {
            
            setTotalM(snapshot.docs.length.toString());
            
        });
        setIsLoading(false);
    },[]);
    
    console.log(totalM);

    return (
        <div className="totalAmount">
            <div className="totalAmount__title">
                {/* <h5>Total Members</h5> */}
                <FontAwesomeIcon icon={faUsers} />
            </div>
            <div className="totalAmount_data">
            
            {!isLoading && <Typewriter
  
                onInit={(typewriter)=> {

                typewriter
                
                .typeString("Total Members")
                    
                .pauseFor(500)
                .deleteAll()
                .typeString(`Members`)
                .start();
                }}
            />}
            <h3>{totalM}</h3>
            </div>
        </div>
    );
}
 
export default TotalMembers;