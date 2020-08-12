import React, {useState} from 'react';
import FormCreateTask from "./FormCreateTask";
import Board from "./Board";
import {v4 as uuidv4} from 'uuid';

const initialTasks = [
    {
        id: uuidv4(),
        title: 'First Task',
        priority: 2,
        status: 'todo'
    },
    {
        id: uuidv4(),
        title: 'Second Task',
        priority: 3,
        status: 'review'
    }
];
const statuses = ['todo', 'progress', 'review', 'done'];

function App() {
    const [tasks, setTasks] = useState(initialTasks);
    return (
        <div>
            <FormCreateTask/>
            {
                statuses.map(el =>
                    <Board
                        status={el}
                        key={el}
                        tasks={tasks}
                    />)
            }
        </div>
    );
}

export default App;
