import React from 'react';
import Task from "./Task";
import {get} from 'lodash';

function Board(props) {
    const tasks = get(props, 'tasks', []);
    return (
        <div>
            Board
            {props.status}
            {
                tasks
                    .filter(el => el.status === props.status)
                    .map(el => <Task task={el} key={el.id}/>)
            }
            <hr/>
        </div>
    );
}

export default Board;
