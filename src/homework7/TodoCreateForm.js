import React, {useState} from 'react';
import './Buttons.css';

function TodoCreateForm(props) {
    const [inputValue, setInputValue] = useState('');
    const inputOnChange = e => setInputValue(e.target.value);
    const onCreate = (e) => {
        e.preventDefault();
        props.create(inputValue);
        setInputValue('')
    };

    return (
        <div>
            <form onSubmit={onCreate}>
                <input value={inputValue} onChange={inputOnChange}/>
                <button className={'Button'} onClick={onCreate}>Add</button>
            </form>
        </div>
    );
}

export default TodoCreateForm;
