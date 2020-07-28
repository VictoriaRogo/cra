import React, {useState} from 'react';
import Counter from "./Counter";


function App() {

    const [counters, setCounters] = useState([4, 11, 34]);

    const addCounter = () => {
        // const r = Math.floor(Math.random() * 10);
        const r = 15;
        setCounters([...counters, r])
    };
    // console.log(counters);

    const plusOne = (index) => {
        const newCounters = [...counters];
        newCounters[index]++;
        setCounters(newCounters);
    };

    return (
        <div className={App}>

            {counters.map((el, i) =>
                <Counter
                    count={el}
                    key={i}
                    index={i}
                    plus={plusOne}
                />)}

            <button onClick={addCounter}>Add Counter</button>
        </div>
    );
}

export default App;
