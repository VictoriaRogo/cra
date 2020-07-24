import React, {useState} from 'react';
import Counter from "./Counter";
import './App.css';
import './CountBtn.css';

function App() {

    const [num, setNum] = useState(3);

    const addCounter = () => {
        setNum(num + 1);
    }

    const counters = () => {
        let res = [];
        for (let i  = 0; i < num; i++) {
            res.push(<Counter/>)
        }
        return res;
    }

    return (
        <div className={"App"}>
            <div>
                {counters()}
            </div>
            <button className={'CountBtn'} onClick={addCounter}>Add Counter</button>
        </div>
    );
}

export default App;
