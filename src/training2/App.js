import React, {useState} from "react";
import Row from "./Row";
import './App.css';


function App() {
    const [indicator, setIndicator] = useState([1, 2, 3]);
    const [count, setCount] = useState(4);

    const addOne = (index) => {
        let add1 = [...indicator];
        add1[index]++;
        setIndicator(add1);
    };

    const minOne = (index) => {
        let min1 = [...indicator];
        min1[index]--;
        setIndicator(min1);
    };

    const reset = (index) => {
        let res = [...indicator];
        res[index] = 0;
        setIndicator(res);
    };

    const deleteRow = (index) => {
        const delRow = indicator.filter((el, i) => {return i !== index});
        setIndicator(delRow);
    };

    const addIndicator = () => {
       setCount(count + 1);
       setIndicator([...indicator, count]);
    };

    const resetAll = () => {
        const resAll = [...indicator].map(el => 0);
        setIndicator(resAll);
    }


    return <div>
        <button type="button" className="btn btn-outline-success" onClick={addIndicator}>Add Counter</button>
        <button type="button" className="btn btn-outline-warning" onClick={resetAll}>Reset All</button>
        {indicator.map((el, i) => (
            <Row
                indicator={el}
                key={i}
                index={i}
                addOne={addOne}
                minOne={minOne}
                reset={reset}
                deleteRow={deleteRow}
            />
        ))}

    </div>;
}

export default App;