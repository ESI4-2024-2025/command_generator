import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./styles/App.css";
import Commands from "./components/Commands";
import GiveEnchantedItems from "./components/GiveCommand/GiveEnchantedItems";
import Home from "./Home";
import AccountCreationOrConnexion from "./components/UserSection/AccountCreationOrConnexion";
import Account from "./components/UserSection/Account";
import Changelog from "./components/Changelog/Changelog";
import LanguageSelector from "./components/Languageselector/LanguageSelector";

function App() {
	return (
		<div className="app">
			<LanguageSelector/>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/commands" element={<Commands/>}/>
					<Route path="/commands/give" element={<GiveEnchantedItems/>}/>
					<Route path="/account" element={<Account/>}/>
					<Route path="/account/creationorconnexion" element={<AccountCreationOrConnexion/>}/>
					<Route path="/changelog" element={<Changelog/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;