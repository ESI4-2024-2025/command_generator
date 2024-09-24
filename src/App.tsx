import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Commands from "./components/Commands";
import GiveCommand from "./components/GiveCommand/GiveCommand";
import Home from "./Home";

function App() {
    return (
        <div className="app">
            <div className="app-body">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/commands" element={<Commands />} />
                        <Route path="/commands/give" element={<GiveCommand />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;