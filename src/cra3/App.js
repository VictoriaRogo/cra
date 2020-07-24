import React, {useState} from 'react';

function App() {
    let counter = 5;
    const [count, setCount] = useState(5);

    const add = () => {
        console.log('ADD ONE');
        counter++;
        setCount(count + 1);
    }

    const minus = () => {
        console.log('MINUS ONE');
        counter--;
        setCount(count - 1);
    }

    return (
        <div>
            <button onClick={add}>Add 1</button>
            {counter} {count}
            <button onClick={minus}>Minus 1</button>
        </div>
    );
}

export default App;
