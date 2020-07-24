import React from 'react';
import Header from "./Header";
import Footer from "./Footer";


function App() {

    const sn = 'SuperReact';
    const menu = ['Home', 'Products', 'Contacts'];

    return (
        <div className="App">
            PASV REACT COURSE
            <Header name={sn} menu={menu}/>
            <Footer label={sn} menu={menu}/>
        </div>
    )
}

export default App;
