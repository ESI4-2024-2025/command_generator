import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import ButtonsJavaEdition from "../utilities/ButtonsJavaEdition";
import "../../styles/Account.css";

function Account() {
	const navigate = useNavigate();
	const [userInfo, setUserInfo] = useState({
		username: "",
		email: "",
		phone: ""
	});

	useEffect(() => {
		const token = localStorage.getItem("accessToken");
		if (!token) {
			navigate("/account/creationorconnexion");
		} else {
			axios.put(`${process.env.REACT_APP_HOST_BACK}/users/current`, {}, {
				headers: {
					"x-access-token": token
				}
			})
				.then(response => {
					console.log(response.data);
					const {username, email, phone} = response.data;
					setUserInfo({username, email, phone});
				})
				.catch(() => {
					navigate("/account/creationorconnexion");
				});
		}
	}, [navigate]);

	const handleLogout = () => {
		localStorage.removeItem("accessToken");
		window.location.reload();
	};

	return (
		<div className="accounts-page">
			<h1 className="accounts-title">Informations de Profil</h1>
			<div className="account" data-testid="Home">
				<div className="account-information text-minecraft">
					<p>Username: {userInfo.username}</p>
					<p>Email: {userInfo.email}</p>
					<p>Phone Number: {userInfo.phone}</p>
				</div>
			</div>
			<div className="account-buttons">
				<ButtonsJavaEdition taille="19" title="Retour" path="/"/>
				<ButtonsJavaEdition taille="19" title="Deconnexion" onClick={handleLogout}/>
			</div>
		</div>
	);
}

export default Account;