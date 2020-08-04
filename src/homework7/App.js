import React, {useState} from 'react';
import TodoCreateForm from "./TodoCreateForm";
import TodoList from "./TodoList";
import './App.css'

const initialList = [
    {id: 1, title: 'First', done: false},
    {id: 2, title: 'Second', done: false},
    {id: 3, title: 'Third', done: false}];

function App() {
    const [list, setList] = useState(initialList);

    const create = title => {
        const newItem = {
            id: Math.random() * 10,
            title: title,
            done: false
        }
        const updatedList = [...list, newItem]
        setList(updatedList);
    };

    const deleteItem = id => {
        setList(list.filter((el) => el.id !== id))
    };

    const toggle = id => {
        setList(list.map(el => el.id === id ? {...el, done: !el.done} : el))
    };

    const swap = (id1, id2) => {
        const newList = list.slice();
        newList[id1] = list[id2]
        newList[id2] = list[id1]
        setList(newList);
    };


    return (
        <div className={'App'}>
            <TodoCreateForm create={create}/>
            <TodoList
                list={list}
                deleteItem={deleteItem}
                toggle={toggle}
                swap={swap}
            />
        </div>
    );
}

export default App;
