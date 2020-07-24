import React, {useState} from 'react';
import './App.css';
function App() {

    const [countOne, setCountOne] = useState(0);
    const [countTen, setCountTen] = useState(0);
    const [countRandom, setCountRandom] = useState(0);
    const randInt = () => Math.floor(Math.random() * 10) + 1;


    const plusOne = () => {
        console.log('Plus One');
        setCountOne(countOne + 1);
    }
    const minusOne = () => {
        console.log('Minus One');
        setCountOne(countOne - 1);
    }

    const plusTen = () => {
        console.log('Plus Ten');
        setCountTen(countTen + 10);
    }
    const minusTen = () => {
        console.log('Minus Ten');
        setCountTen(countTen - 10);
    }

    const plusRandom = () => {
        console.log('Plus Random');
        setCountRandom(countRandom + randInt());
    }
    const minusRandom = () => {
        console.log('Minus Random');
        setCountRandom(countRandom - randInt());
    }

    return (
        <div className={'Main'}>
            <div>
                <button onClick={plusOne}>Plus One</button>
                <span className={'Counter'}>{countOne}</span>
                <button onClick={minusOne}>Minus One</button>
            </div>

            <div>
                <button onClick={plusTen}>Plus Ten</button>
                <span className={'Counter'}>{countTen}</span>
                <button onClick={minusTen}>Minus Ten</button>
            </div>

            <div>
                <button onClick={plusRandom}>Plus Random</button>
                <span className={'Counter'}>{countRandom}</span>
                <button onClick={minusRandom}>Minus Random</button>
            </div>
        </div>
    );
}

export default App;
