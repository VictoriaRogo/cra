import React, {useState} from "react";
import Row from "./Row";
import './App.css';

function App() {
    const [counters, setCounters] = useState([0, 0, 0])

    const addCounter = () => {
        setCounters([...counters, 0]);
    };

    const deleteCounter = (index) => {
        setCounters(counters.filter((_, i) => i !== index));
    };

    const deleteAll = () => {
        setCounters([]);
    };

    const resetAll = (index) => {
        setCounters(counters.map(() => 0));
    };

    const updateCounter = (index, value) => {
        const newCounters = [...counters];
        newCounters[index] = value;
        setCounters(newCounters);
    };

    const createRow = (el, i) => (
        <Row
            key={i}
            index={i}
            count={el}
            updateCounter={updateCounter}
            deleteCounter={deleteCounter}
        />
    );

    return (
        <div className={"App"}>
            <div className={'Controls'}>
                <button className={'Button'} onClick={addCounter}>Add Counter</button>
                <button className={'Button'} onClick={resetAll}>Reset All</button>
                <button className={'Button'} onClick={deleteAll}>Delete All</button>
            </div>
            <div>{counters.map(createRow)}</div>
        </div>
    );
}

export default App;