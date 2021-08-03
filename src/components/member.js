import './member.css';
import { Link } from 'react-router-dom';

const Member = (props) => {

    console.log(props.name);

    return (
        <div className="member">
            <Link to={`/members/${props.name}`}>{props.name}</Link>
        </div>
    );
}
 
export default Member;