import React from 'react';


function FormCreateTask({addTask}) {
    return (
        <div>
            <form onSubmit={addTask}>
                Title: <input/>
                Priority: <select>
                <option value='1'>Low</option>
                <option value='2'>Medium</option>
                <option value='3'>High</option>
            </select>
                <input type='submit'/>
            </form>
        </div>
    );
}

export default FormCreateTask;
