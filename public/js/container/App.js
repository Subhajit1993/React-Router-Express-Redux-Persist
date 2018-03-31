import React from 'react'

import noLocation from "../components/noLocation";
import Header from "../components/header";
import MainSidebar from "../components/mainSidebar";
import MainContent from "../components/mainContent";
import Footer from "../components/footer";

const App = () => {
    return (
        <div className="wrapper fullscreen">
        <Header/>
            <MainSidebar/>
            <MainContent/>
            <Footer/>
        </div>
    )
};

export default App;