import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Home from "./components/Home";
import GiveCommand from "./components/GiveCommand";

function App() {
    return (
        <div className="app">
            <div className="app-body">
                <BrowserRouter>
                    <Routes>
                        <Route data-testid='homeComponent' path="/" element={<Home />} />
                        <Route data-testid='giveCommandComponent' path="/give" element={<GiveCommand />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;