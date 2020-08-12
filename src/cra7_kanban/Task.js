import React from 'react';


function Task(props) {
    return (
        <div>
            Task
            {props.task.title}
            {props.task.priority}
        </div>
    );
}

export default Task;
