import React, {useState} from "react";
import axios from "axios";
import "../../styles/InputJavaEdition.css";
import "../../styles/Connexion.css";
import ButtonsJavaEdition from "../utilities/ButtonsJavaEdition";
import {useNavigate} from "react-router-dom";

function Connexion() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		setError("");
		try {
			const response = await axios.post(`${process.env.REACT_APP_HOST_BACK}/users/login`, { email, password });
			if (response.status === 200) {
				localStorage.setItem("accessToken", response.data.accessToken);
				navigate("/account");
			}
		} catch (err) {
			console.log(err);
			setError("Erreur de connexion. Veuillez verifier vos informations.");
		}
	};

	const handleDivClick = () => {
		const form = document.querySelector("form");
		if (form) {
			form.dispatchEvent(new Event("submit", {cancelable: true, bubbles: true}));
		}
	};

	return (
		<div className="connexion">
			{error && <p>{error}</p>}
			<form onSubmit={handleSubmit}>
				<div className="connexion-input-block">
					<div className="connexion-input-wrapper">
						<label htmlFor="email" className="connexion-label">Email</label>
						<input
							type="email"
							id="email"
							className="minecraft-input fixed-size connexion-input"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
				</div>
				<div className="connexion-input-block">
					<div className="connexion-input-wrapper">
						<label htmlFor="password" className="connexion-label">Mot de passe</label>
						<input
							type="password"
							id="password"
							className="minecraft-input fixed-size connexion-input"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
				</div>
				<div className="connexion-button" onClick={handleDivClick}>
					<ButtonsJavaEdition taille="20" title="Se connecter"/>
				</div>
			</form>
		</div>
	);
}

export default Connexion;