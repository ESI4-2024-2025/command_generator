import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./styles/App.css";
import Commands from "./components/Commands";
import GiveCommand from "./components/GiveCommand/GiveCommand";
import Home from "./Home";
import AccountCreationOrConnexion from "./components/UserSection/AccountCreationOrConnexion";
import Account from "./components/UserSection/Account";

function App() {
	return (
		<div className="app">
			<div className="app-body">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/commands" element={<Commands/>}/>
						<Route path="/commands/give" element={<GiveCommand/>}/>
						<Route path="/account" element={<Account/>}/>
						<Route path="/account/creationorconnexion" element={<AccountCreationOrConnexion/>}/>
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;