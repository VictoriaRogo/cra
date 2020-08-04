import React, {useState} from "react";

function Buttons(props) {
    const {update} = props;
    const [number, setNumber] = useState(1);
    const option = (_, i) => (<option key={i}>{i + 1}</option>);
    const options = Array(10).fill(0).map(option);
    const change = (e) => setNumber(+e.target.value);
    return (
        <div>
            <select defaultValue={number} onChange={change}>{options}</select>
            <button onClick={() => update('Add', number)}>Add Counter</button>
            <button onClick={() => update('Reset')}>Reset All</button>
        </div>);
}

function Counters(props) {
    const {counters, update} = props;
    const row = (e, i) => (<Row index={i} key={i} value={e} update={update}/>);
    return (<div>{counters.map(row)}</div>);
}

function Row(props) {
    const {value: [v, c], update, index} = props;
    const button = (i, v, t) => (
        <button key={i} onClick={() => update([v, c], index)}>{t}</button>)
    const buttons = Array(c).fill(0);
    return (
        <div>
            {buttons.map((_, i) => button(i, v - c + i, -(c - i)))}
            <span>{v}</span>
            {buttons.map((_, i) => button(i, v + i + 1, '+' + (i + 1)))}
            <button onClick={() => update([0, c], index)}>Reset</button>
            <button onClick={() => update('Delete', index)}>Delete</button>
        </div>)
}

function App() {
    const [counters, setCounters] = useState([[1, 1], [2, 1], [3, 1]]);
    const update = (action, index) => {
        let copy = counters.map(v => [...v]);
        if (action === 'Add') {
            copy.push([copy.length + 1, index])
        } else if (action === 'Reset') {
            copy.forEach(v => v[0] = 0);
        } else if (action === 'Delete') {
            copy.splice(index, 1);
        } else {
            copy[index] = action
        }
        setCounters(copy);
    }
    return (
        <div>
            <Buttons update={update}/>
            <Counters counters={counters} update={update}/>
        </div>
    );
}

export default App;