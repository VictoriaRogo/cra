import React from "react";
import './Row.css';

function Row(props) {
    return (
        <div>
            <button className={'Button'} onClick={() => props.updateCounter(props.index, props.count-1)}>-</button>
            <span className={'Count'}>{props.count}</span>
            <button className={'Button'} onClick={() => props.updateCounter(props.index, props.count+1)}>+</button>
            <button className={'Button'} onClick={() => props.updateCounter(props.index, 0)}>Reset</button>
            <button className={'Button'} onClick={() => props.deleteCounter(props.index, 0)}>Delete</button>
        </div>
    );
}

export default Row;