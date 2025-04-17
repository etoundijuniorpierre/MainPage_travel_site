import React from 'react';
import "./app.css";
import Footer from './Component/Footer/Footer';
import NavBar from './Component/NavBAr/NavBar';
import Home from './Component/Home/Home';
import Main from './Component/Main/Main';

export default function App() {
    return (
        <>
            <NavBar />
            <Home />
            <Main />
            <Footer/>
        </>
    )
}