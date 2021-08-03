import { useEffect } from "react";
import { useState } from "react";
import './People.css';
import db from '../firebase/config';
import M from "minimatch";
import Member from "./member";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Individual from "./Individual";

const People = () => {

    const [customer, setCustomer] = useState('');
    // console.log('i m in');


    const [members, setMembers] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {;
        db.collection('customers').onSnapshot((snapshot) => {
            let changes = snapshot.docChanges();
            let temp = [];
            changes.forEach((change) => {
                // console.log(change.doc.data());
                temp = [
                    ...temp,
                    change.doc.data().name
                ];
            });
            setMembers(temp);
            // console.log(members);
            setLoading(true);
        });
        
    }, []);

    // console.log(members);

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     console.log('i m in')
    //     setMembers(members.filter((data) => data.includes(e.target.value)));
    // };

    const filteredMembers = (term) => {
        console.log(term);

        
        setMembers(members.filter((data) => {
                return data.toLowerCase().includes(term);
            }));
        
    };

    const clearHandler = () => {
        
        db.collection('customers').get().then((snapshot) => {
            let temp1 = [];
            snapshot.docs.map((doc) => {
                console.log(doc.data().name)
                temp1 = [
                    ...temp1,
                    doc.data().name
                ];
            });
            // console.log(temp1);
            setMembers(temp1);
            setCustomer('');
        });
        

    };

    
    return (
        <Router>
            <div className="people">
                <Switch>
                <Route path="/members/:name">
                    <Individual />
                </Route>
                <Route path="/">
                    <form>
                        <input
                            type="text"
                            placeholder="Search a Customer"
                            value={customer}
                            onChange={e => setCustomer(e.target.value)}
                            onKeyUp={(e) => filteredMembers(e.target.value)}
                        />
                        
                
                        <button type="button" onClick={clearHandler}>Clear</button>
                    </form>
                    <div className="peoples">
                        {loading && members.map((member, index) => <Member name={member} id={index} key={index} />)}
                        {!loading && <h2 style={{textAlign:"center"}}>Loading...</h2>}
                    </div>
                </Route>
                </Switch>
            </div>
        </Router>
    );
}
 
export default People;