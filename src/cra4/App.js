import React, {useState} from 'react';
import Counter from "./Counter";


function App() {

    const [count, setCount] = useState(10);

  const hello = (n) => {
      console.log('Hello', n, count);
      setCount(count + 1);
    }

  return (
    <div className="App">

        App

      <Counter count={count} hello={hello}/>


    </div>
  );
}

export default App;
