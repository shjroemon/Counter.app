import React, { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(1);
    let color;
    if (count > 0) {
        color = 'green';
    }
    if (count < 0) {
        color = 'red';
    }
    if (count === 0) {
        color = 'black';
    }

    const subtract = () => setCount(count - 1);
    const reset = () => setCount(0);
    const add = () => setCount(count + 1);

    return (
        <div className="container">
        <h1 className="app_name">Counter App</h1>
        <span style={{color}} className="number" id="number">{count}</span>
        <div className="button-panel">
            <button onClick={subtract} className="subtract" id="subtract">SUBTRACT</button>
            <button onClick={reset} className="reset" id="reset">RESET</button>
            <button onClick={add} className="add" id="add">ADD</button>
        </div>
    </div>
    )
    
}

export default App;
