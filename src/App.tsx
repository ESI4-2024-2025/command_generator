import React from 'react';
import {BrowserRouter, Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from "./components/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}> </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;