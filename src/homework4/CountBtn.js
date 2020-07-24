import React from 'react';
import './CountBtn.css';

function CountBtn(props) {
    const send = () => {
        props.setCount(props.count + Number(props.value));
    }
    return (
        <button className={'CountBtn'} onClick={send}>
            {props.value}
        </button>
    );
}

export default CountBtn;
