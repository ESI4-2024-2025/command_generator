import React, {useState} from "react";
import axios from "axios";
import "../../styles/InputJavaEdition.css";
import "../../styles/Connexion.css";
import ButtonsJavaEdition from "../utilities/ButtonsJavaEdition";
import Notification from "../utilities/Notification";
import {useNavigate} from "react-router-dom";

function Connexion() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [notificationMessage, setNotificationMessage] = useState<string | undefined>(undefined);
	const [notificationType, setNotificationType] = useState<string | undefined>(undefined);
	const navigate = useNavigate();

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		try {
			const response = await axios.post(`${process.env.REACT_APP_HOST_BACK}/users/login`, {email, password});
			localStorage.setItem("accessToken", response.data.accessToken);
			navigate("/account");
		} catch (err) {
			console.log(err);
			setNotificationMessage(undefined); // Reset notification message
			setNotificationType(undefined); // Reset notification type
			setTimeout(() => {
				setNotificationMessage("Erreur de connexion. Veuillez verifier vos informations.");
				setNotificationType("error");
			}, 0); // Set new notification message and type
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
			{notificationMessage && <Notification message={notificationMessage} type={notificationType}/>}
		</div>
	);
}

export default Connexion;