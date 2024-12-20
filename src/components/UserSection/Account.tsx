import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import ButtonsJavaEdition from "../utilities/ButtonsJavaEdition";
import "../../styles/Account.css";
import {useTranslation} from "react-i18next";
import Notification from "../utilities/Notification"; // Assuming you have a Notification component

function Account() {
	const navigate = useNavigate();
	const [userInfo, setUserInfo] = useState({
		username: "",
		email: ""
	});
	const [notificationMessage, setNotificationMessage] = useState<{ text: string, type: string } | null>(null);
	const [emailVerified, setEmailVerified] = useState(true);
	const {t} = useTranslation();

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
					const {username, email, email_verified} = response.data;
					setUserInfo({username, email});
					if (!email_verified) {
						setEmailVerified(false);
						setNotificationMessage({
							text: t("PROFILE.MAIL_UNVERIFIED"),
							type: "info"
						});
					}
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

	const sendVerifyEmail = async () => {
		try {
			const response = await axios.put(`${process.env.REACT_APP_HOST_BACK}/users/email/verify`, {email: userInfo.email});
			setNotificationMessage({
				text: t("PROFILE.MODIFICATION.SUCCESS"),
				type: "success"
			});
		} catch (error) {
			setNotificationMessage({
				text: t("PROFILE.MODIFICATION.ERROR"),
				type: "error"
			});
		}
	};

	return (
		<div className="accounts-page">
			<h1 className="accounts-title">{t("PROFILE.TITLE")}</h1>
			<div className="account" data-testid="Home">
				<div className="account-information text-minecraft">
					<p>{t("GLOBAL.USERNAME")} : {userInfo.username}</p>
					<p>{t("GLOBAL.MAIL")} : {userInfo.email}</p>
				</div>
				<ButtonsJavaEdition taille="25" title="PROFILE.MODIFY_MY_INFOS"
									path={`/account/infomodifications?username=${userInfo.username}&email=${userInfo.email}`}/>
				<br/>
				{!emailVerified && (
					<ButtonsJavaEdition taille="25" title="PROFILE.RESEND_MAIL" onClick={sendVerifyEmail}/>
				)}
			</div>
			<div className="account-buttons">
				<ButtonsJavaEdition taille="19" title="GLOBAL.BACK" path="/"/>
				<ButtonsJavaEdition taille="19" title="PROFILE.DECONECT" onClick={handleLogout}/>
			</div>

			{notificationMessage && <Notification message={notificationMessage.text} type={notificationMessage.type}/>}
		</div>
	);
}

export default Account;