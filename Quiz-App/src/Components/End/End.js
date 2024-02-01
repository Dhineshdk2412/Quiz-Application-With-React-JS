import React from 'react';
import './End.css';
const End = (props) => {
    return (
        <div className='End'>
            <h1>Well done , <br/>
            You have Completed the Quiz</h1>
        <button onClick={props.click}>View The Result</button>
        </div>
    );
}
export default End;