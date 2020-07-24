import React from 'react';
import Header from "./Header";
import Footer from "./Footer";


function App() {
    const siteName = 'React Practice';
    const version = '0.1.2';
    const company = 'PASV';
    const menu = ['Home', 'Products', 'Service', 'Contacts'];
    return (
        <div>

            <h1>Hello</h1>
            <Header
                siteName={siteName}
                version={version}
                company={company}
                menu={menu}
            />
            <Footer/>

        </div>
    );
}

export default App;
