import React from 'react';
import Task from "./Task";

function Board({status, tasks=[], updateTask, index, edit}) {
    return (
        <div className='col'>
            {status}
            {
                tasks
                    .filter(el => el.status === status)
                    .map(el => <Task
                        task={el}
                        key={el.id}
                        index={index}
                        updateTask={updateTask}
                        tasks={tasks}
                        edit={edit}
                    />)
            }
            <hr/>
        </div>
    );
}

export default Board;

/*

import {get} from 'lodash';

function Board(props) {
    const tasks = get(props, 'tasks', []);

vs

function Board({status, tasks=[]) {

*/
