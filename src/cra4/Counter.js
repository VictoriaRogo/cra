import React from 'react';


function Counter(props) {

    const send = () => {
        props.hello(123);
    };



  return (
    <div className="App">
      Counter {props.count}
        <button onClick={send}>Send to parent</button>
    </div>
  );
}

export default Counter;
