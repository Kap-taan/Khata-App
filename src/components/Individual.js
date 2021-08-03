import { useEffect, useState } from "react";
import { useParams } from "react-router";
import db from "../firebase/config";
import './Individual.css';
import { Link } from "react-router-dom";
import DateDisplay from "./date";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Individual = () => {

    const [mem, setMem] = useState([]);
    let temp = [];
    const [result, setResult] = useState(0);
    let total = 0;

    const{ name } = useParams();
    console.log(' i m in');

    useEffect(() => {

        db.collection(name).orderBy('date').get().then((data) => {
            
            data.docs.map((doc) => {
                console.log(doc.data().date.seconds);
                temp = [
                    ...temp,
                    {date: doc.data().date.seconds, amount: doc.data().amount, name: doc.data().name, id: doc.id}
                ];
            });
            console.log(temp);
            setMem(temp);
            temp.map((data) => {
                console.log(data.amount);
                total = total + parseInt(data.amount);
            });
            console.log(total);
            setResult(total);
            console.log(result);
        });

    }, []);

    // console.log(mem);

    const deleteHandler = (id) => {

        db.collection(name).doc(id).delete();
        alert('Deleted Successfully');

        db.collection(name).orderBy('date').get().then((data) => {
            
            data.docs.map((doc) => {
                console.log(doc.data().date.seconds);
                temp = [
                    ...temp,
                    {date: doc.data().date.seconds, amount: doc.data().amount, name: doc.data().name, id: doc.id}
                ];
            });
            console.log(temp);
            setMem(temp);
            temp.map((data) => {
                console.log(data.amount);
                total = total + parseInt(data.amount);
            });
            console.log(total);
            setResult(total);
            console.log(result);
        });


    };

    return (
        <div className="indi">
            <h3 style={{textAlign: "center", fontSize: "30px"}}>{name}</h3>
            {mem.map((doc) => (
                <div className={`de ${doc.amount < 0 ? 'specialC' : ''}`}>
                    <DateDisplay date={doc.date} />
                    <h3 className={`${doc.amount < 0 ? 'specialC' : ''}`}>Rs. {doc.amount}</h3>
                    <button onClick={() => deleteHandler(doc.id)} className={`${doc.amount < 0 ? 'specialC' : ''}`}><FontAwesomeIcon icon={faTrash} /></button>
                </div>
            ))}
            <h2 style={{textAlign:"center"}} >Total Amount : {result}</h2>
            <Link to="/">Go Back</Link>
        </div>
    );
}
 
export default Individual;