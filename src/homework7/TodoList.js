import React from 'react';
import './Buttons.css';
import {trashCan, upArrow, downArrow} from  './Icons';


function TodoList(props) {
    return (
        <div>
            {props.list.map((el, i) =>
                <div className={'row1'} key={el.id}>
                    <span className="record">{el.done ? <s>{el.title}</s> : el.title}</span>
                    <input type="checkbox" checked={el.done} onChange={() => props.toggle(el.id)}/>
                    <button className={'Button'} onClick={() => props.deleteItem(el.id)}>{trashCan}</button>
                    {i !== 0  && <button className={'Button'} onClick={() => props.swap(i, i-1)}>{upArrow}</button>}
                    {i !== props.list.length - 1 && <button className={'Button'} onClick={() => props.swap(i, i+1)}>{downArrow}</button>}
                </div>)}
        </div>
    );
}

export default TodoList;
