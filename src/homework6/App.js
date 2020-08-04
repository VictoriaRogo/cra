import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <div>
                <div className="container-sm block">100% wide until small breakpoint</div>
                <div className="container-md block">100% wide until medium breakpoint</div>
                <div className="container-lg block">100% wide until large breakpoint</div>
                <div className="container-xl block">100% wide until extra large breakpoint</div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col b1">
                        One of three columns
                    </div>
                    <div className="col b1">
                        One of three columns
                    </div>
                    <div className="col b1">
                        One of three columns
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
