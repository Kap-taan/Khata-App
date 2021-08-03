import './date.css';

const DateDisplay = (props) => {

    const toDateTime = (secs) => {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        return t;
    }

    const month = toDateTime(props.date).toLocaleString('en-US', { month: 'long' });
    const date = toDateTime(props.date).toLocaleString('en-US', {day: "2-digit"});
    const year = toDateTime(props.date).toLocaleString('en-US', {year: "2-digit"});

    // const month = props.date
    // const date = props.date
    // const year = props.date.toLocaleString('en-US', {year: "2-digit"});
    
    console.log(year);
    console.log(month);
    console.log(date);

    return ( 
        <div className="expense__dates">
            <div className="expense__month">{month}</div>
            <div className="expense__year">{year}</div>
            <div className="expense__date">{date}</div>
        </div>
     );
}
 
export default DateDisplay;