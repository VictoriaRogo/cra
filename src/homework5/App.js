import React, {useState} from "react";
import Row from "./Row";
import './App.css';

function App() {
    // вызвали useState с начальным параметром
    // и присвоили результат ее выполнения в переменную
    const [counters, setCounters] = useState([0, 0, 0])

    // спред оператор, включает counters в новый массив
    // добавляем 0
    const addCounter = () => {
        setCounters([...counters, 0]);
    };

    // передаем в setCounters новый массив,
    // полученный из counters исключением одного элемента по индексу
    const deleteCounter = (index) => {
        setCounters(counters.filter((_, i) => i !== index));
    };

    // передаем в setCounters новый пустой массив
    const deleteAll = () => {
        setCounters([]);
    };

    // передаем в setCounters новый массив,
    // полученный из counters заменой всех значений на 0
    const resetAll = (index) => {
        setCounters(counters.map(() => 0));
    };

    // передаем в setCounters новый массив,
    // полученный из counters заменой одного элемента по index, value
    const updateCounter = (index, value) => {
        const newCounters = [...counters];
        newCounters[index] = value;
        setCounters(newCounters);
    };

    // функция принимает параметры: элемент и его индекс в списке и
    // возвращает компонент Row инициализированный параметрами
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