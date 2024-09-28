import React, {useState} from "react";
import axios from "axios";
import "../../styles/Creation.css";
import ButtonsJavaEdition from "../utilities/ButtonsJavaEdition";
import Notification from "../utilities/Notification";
import {useNavigate} from "react-router-dom";

function Creation() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [notificationMessage, setNotificationMessage] = useState<string | undefined>(undefined);
	const [notificationType, setNotificationType] = useState<string | undefined>(undefined);
	const navigate = useNavigate();

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		try {
			const response = await axios.post(`${process.env.REACT_APP_HOST_BACK}/users/register`, {
				username,
				email,
				phone,
				password
			});
			if (response.status === 200) {
				localStorage.setItem("accessToken", response.data.accessToken);
				navigate("/account");
			}
		} catch (err) {
			setNotificationMessage(undefined); // Reset notification message
			setNotificationType(undefined); // Reset notification type
			setTimeout(() => {
				setNotificationMessage("Erreur de création de compte. Veuillez vérifier vos informations.");
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
		<div className="creation">
			<form onSubmit={handleSubmit}>
				<div className="creation-input-block">
					<div className="creation-input-wrapper">
						<label htmlFor="username" className="creation-label">Nom d'utilisateur</label>
						<input
							type="text"
							id="username"
							className="minecraft-input fixed-size creation-input"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
				</div>
				<div className="creation-input-block">
					<div className="creation-input-wrapper">
						<label htmlFor="email" className="creation-label">Email</label>
						<input
							type="email"
							id="email"
							className="minecraft-input fixed-size creation-input"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
				</div>
				<div className="creation-input-block">
					<div className="creation-input-wrapper">
						<label htmlFor="phone" className="creation-label">Numero de telephone</label>
						<input
							type="text"
							id="phone"
							className="minecraft-input fixed-size creation-input"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>
				</div>
				<div className="creation-input-block">
					<div className="creation-input-wrapper">
						<label htmlFor="password" className="creation-label">Mot de passe</label>
						<input
							type="password"
							id="password"
							className="minecraft-input fixed-size creation-input"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
				</div>
				<div className="creation-button" onClick={handleDivClick}>
					<ButtonsJavaEdition taille="20" title="Creer un compte"/>
				</div>
			</form>
			{notificationMessage && <Notification message={notificationMessage} type={notificationType}/>}
		</div>
	);
}

export default Creation;