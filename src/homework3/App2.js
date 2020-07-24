import React, {useState} from 'react';

function Counter(props) {
    const {step} = props;
    const [count, setCount] = useState(0);
    const shift = () => step === 0 ? Math.floor(Math.random() * 10) + 1 : step;
    const text = step === 0 ? 'Rand' : step;

    const plus = () => {
        setCount(count + shift());
    }
    const minus = () => {
        setCount(count - shift());
    }
    return (
        <div>
            <button onClick={plus}>Plus {text}</button>
            {count}
            <button onClick={minus}>Minus {text}</button>
        </div>
    );
}

function App2() {
    return (
        <div>
            <Counter step={1}></Counter>
            <Counter step={10}></Counter>
            <Counter step={0}></Counter>
        </div>
    );
}

export default App2;
