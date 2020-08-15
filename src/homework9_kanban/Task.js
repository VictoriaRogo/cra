import React from 'react';

const statuses = ['Todo', 'Progress', 'Review', 'Done'];
const colors = ['bg-success', 'bg-warning', 'bg-danger'];

function Task({task, updateTask, index, tasks, edit}) {
    return (
        <div className='card mb-3'>
            <div className={'card-header text-white ' + colors[task.priority - 1]}>{task.title}</div>
            <div className='card-body'>
                <div>{task.description}</div>
                <div className="text-secondary">Priority: {['Low','Medium','High'][task.priority - 1]}</div>
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
                    <button onClick={() => edit(task)}>Edit</button>
                </div>
            </div>
        </div>
    );
}

export default Task;
