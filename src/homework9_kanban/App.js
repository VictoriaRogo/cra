import React, {useState} from 'react';
import FormCreateTask from "./FormCreateTask";
import Board from "./Board";
import {v4 as uuidv4} from 'uuid';

const initialTasks = [
    {
        id: uuidv4(),
        title: 'First Task',
        description: 'Description 1',
        priority: 2,
        status: 'todo'
    },
    {
        id: uuidv4(),
        title: 'Second Task',
        description: 'Description 2',
        priority: 3,
        status: 'review'
    }
];
const statuses = ['todo', 'progress', 'review', 'done'];

function App() {
    const [tasks, setTasks] = useState(initialTasks);
    const addTask = e => {
        e.preventDefault();
        const newTask = {
            id: uuidv4(),
            title: e.target[0].value,
            priority: e.target[1].value,
            status: 'todo'
        };
        e.target.reset();
        setTasks([...tasks, newTask]);
    };
    const updateTask = () => {
        setTasks([...tasks]);
    };
    return (
        <div>
            <FormCreateTask addTask={addTask}/>
            <div className='container'>
                <div className='row'>
                    {
                        statuses.map((el, index) =>
                            <Board
                                status={el}
                                key={el}
                                index={index}
                                tasks={tasks}
                                updateTask={updateTask}
                            />)
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
