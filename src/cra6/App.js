import React, {useState} from 'react';
import TodoCreateForm from "./TodoCreateForm";
import TodoList from "./TodoList";

const initialList = [
    {id: 1, title: 'First', done: false},
    {id: 2, title: 'Second', done: false},
    {id: 3, title: 'Third', done: false}];

function App() {
    const [list, setList] = useState(initialList)
    const create = title => {
        const newItem = {
            id: Math.random() * 10,
            title: title,
            done: false
        }
        const updatedList = [...list, newItem]
        setList(updatedList);
    };

    return (
        <div>
            <TodoCreateForm create={create}/>
            <TodoList list={list}/>
        </div>
    );
}

export default App;
