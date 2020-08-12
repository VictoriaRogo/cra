import React from 'react';

const statuses = ['todo', 'progress', 'review', 'done'];

function Task({task, updateTask, index, tasks}) {
    return (
        <div>
            <div>{task.title}</div>
            <div>{task.description}</div>
            <div>{task.priority}</div>
            <div>
                <button disabled={index === 0} onClick={() => {
                    task.status = statuses[index - 1];
                    updateTask()
                }}>&lt;</button>
                <button disabled={index === 3} onClick={() => {
                    task.status = statuses[index + 1];
                    updateTask()
                }}>&gt;</button>
                <button onClick={() => {
                    tasks.splice(tasks.indexOf(task), 1);
                    updateTask()
                }}>&times;</button>
            </div>
        </div>
    );
}

export default Task;
