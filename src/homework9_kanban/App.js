import React, {useState} from 'react';
import FormCreateTask from "./FormCreateTask";
import Board from "./Board";
import Modal from "./Modal";
import {v4 as uuidv4} from 'uuid';
import './app.css';

const initialTasks = [
    {
        id: uuidv4(),
        title: 'First Task',
        description: 'Description 1',
        priority: 1,
        status: 'Todo'
    },
    {
        id: uuidv4(),
        title: 'First Task 2',
        description: 'Description 1',
        priority: 2,
        status: 'Todo'
    },
    {
        id: uuidv4(),
        title: 'Second Task',
        description: 'Description 2',
        priority: 3,
        status: 'Review'
    },
    {
        id: uuidv4(),
        title: 'Third Task',
        description: 'Description 3',
        priority: 3,
        status: 'Progress'
    },
    {
        id: uuidv4(),
        title: 'Fourth Task',
        description: 'Description 4',
        priority: 3,
        status: 'Done'
    },

];
const statuses = ['Todo', 'Progress', 'Review', 'Done'];

function App() {
    const [tasks, setTasks] = useState(initialTasks);
    const [modal, setModal] = useState(false);
    const addTask = e => {
        e.preventDefault();
        const newTask = {
            id: uuidv4(),
            title: e.target[0].value,
            priority: e.target[1].value,
            status: 'Todo'
        };
        e.target.reset();
        setTasks([...tasks, newTask]);
    };
    const updateTask = () => {
        setTasks([...tasks]);
    };
    const edit = (task) => {
        setModal(task);
    };
    const close = () => {
        setModal(false);
    };
    return (
        <div>
            <FormCreateTask addTask={addTask}/>
            <div className='container-xl'>
                <div className='row'>
                    {
                        statuses.map((el, index) =>
                            <Board
                                status={el}
                                key={el}
                                index={index}
                                tasks={tasks}
                                updateTask={updateTask}
                                edit={edit}
                            />)
                    }
                </div>
            </div>
            <Modal modal={modal} close={close}/>
        </div>
    );
}

export default App;
