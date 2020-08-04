import React, {useState} from "react";



function Row(props) {
    return <div>
        <button type="button" className="btn btn-outline-info btn-sm" onClick={() => (props.minOne(props.index))}>-</button>
        {props.indicator}
        <button type="button" className="btn btn-outline-info btn-sm" onClick={() => (props.addOne(props.index))}>+</button>
        <button type="button" className="btn btn-outline-info btn-sm" onClick={() => (props.reset(props.index))}>Reset</button>
        <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => (props.deleteRow(props.index))}>Delete</button>

    </div>;
}

export default Row;