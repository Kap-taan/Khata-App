import React, { useState } from "react";
import './NewForm.css';
import db from '../firebase/config';
import { useEffect } from "react";
import { parse } from "@fortawesome/fontawesome-svg-core";

const New = () => {


    let names = [];

    let result = {};

    useEffect(() => {

        db.collection('customers').get().then((snapshot) => {
            let temp = [];
            snapshot.docs.map((doc) => {
                console.log(doc.data().name);
                temp = [
                    ...temp,
                    doc.data().name
                ];
            });
            names = temp;
            console.log(names);
        });
    

    },[result]);

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState(new Date());

    const submitHandler = (e) => {
        e.preventDefault();
        result = {
            name: name,
            amount: amount,
            date: new Date(date)
        };
        db.collection(name).add(result);
        if(!names.includes(name)){
            db.collection('customers').add({name: name});
        }
        db.collection('money').add({name: name, amount:parseInt(amount)});
        alert('Added Successfully');
        setName('');
        setAmount('');
    }

    return (
        <div className="newEntry">
            <form onSubmit={submitHandler}>
                <input
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <input
                    type="text"
                    required
                    placeholder="Customer Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="text"
                    required
                    placeholder="Amount"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );

};

export default New;