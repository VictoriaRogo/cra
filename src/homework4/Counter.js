import React, {useState} from 'react';
import './App.css';
import CountBtn from "./CountBtn";

// <CountBtn value={'-3'} count={count} setCount={setCount} />

function Counter() {
    const [count, setCount] = useState(0);
    let props1 = {value: '-3', count: count, setCount: setCount}
    return (
        <div className={'Counter'}>
            { CountBtn(props1) }
            <CountBtn value={'-2'} count={count} setCount={setCount}/>
            <CountBtn value={'-1'} count={count} setCount={setCount}/>
            <span className={'CounterValue'}>{count}</span>
            <CountBtn value={'+1'} count={count} setCount={setCount}/>
            <CountBtn value={'+2'} count={count} setCount={setCount}/>
            <CountBtn value={'+3'} count={count} setCount={setCount}/>

        </div>
    );
}

export default Counter;
