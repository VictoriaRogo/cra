import React, {useState} from 'react';

const initialState = [
    {title: "first", done: false},
    {title: "second", done: false},
    {title: "third", done: false}
];

function Form(props) {
    return (
        <div>
            <form onSubmit={props.add}>
                <input/>
                <button type='submit'>Add</button>
            </form>
        </div>
    );
}

function List(props) {
    const item = (el, i) => (
        <div key={i}>
            <input
                type='checkbox'
                checked={el.done}
                onChange={() => props.toggle(i)}
            />
            {el.done ? (<s>{el.title}</s>) : el.title}
            <button onClick={() => props.deleteItem(i)}>Delete</button>
        </div>
    );
    return (
        <div>
            {props.list.map(item)}
        </div>
    );
}

function App() {
    const [list, setList] = useState(initialState)
    const add = (e) => {
        e.preventDefault();
        const input = e.target[0];
        const record = {title: input.value, done: false};
        input.value = "";
        setList([...list, record]);
    };
    const toggle = (index) => {
        const copy = list.slice();
        copy[index].done = !copy[index].done;
        setList(copy);
    };
    const deleteItem = (index) => {
        setList(list.filter((el, i) => i !== index))
    };
    return (
        <div>
            <Form add={add}/>
            <List
                list={list}
                toggle={toggle}
                deleteItem={deleteItem}
            />
        </div>
    );
}

export default App;
