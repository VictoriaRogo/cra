import React from 'react';

function Counter(props) {
console.log('props', props);

    return (
        <div>
            Index:({props.index})
            <button>-</button>
            {props.count}!
            <button onClick={() => props.plus(props.index)}>+</button>
        </div>
    );
}

export default Counter;
