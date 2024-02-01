import React from 'react';
import './Option.css';
const Option = (props) => {
    const opt = Object.keys(props.opt).map(opt => {
        return (
            <li key={opt} onClick={() => props.clickevent(opt)} className = {props.correctOption === opt ? 'crt' : props.clickedOption === opt ? 'incrt' : ''}>{opt}) {props.opt[opt]}</li>
        )
    });
    return(
        <div>
            <u1 className="options" disabled = {props.clickedOption ? true : false}>
                {opt}
            </u1>
            {
                props.result ? props.
                correctOption === props.
                clickedOption ? (
                    <p className='p1'>Correct Answer :</p>
                ) : (
                    <p className='p2'>Answer is Incorrect!</p>
                ) : null

            }
        </div>
    )
}
export default Option;