import React, {useState} from 'react';


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
                <button onClick={onCreate}>create</button>
            </form>
        </div>
    );
}

export default TodoCreateForm;
