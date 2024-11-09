import React from "react";
import {useNavigate} from "react-router-dom";
import ButtonsJavaEdition from "./utilities/ButtonsJavaEdition";
import "../styles/404.css";
import {useTranslation} from "react-i18next";

const NotFound = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();

	return (
		<div className="not-found-container">
			<h1>{t('404.MESSAGE')}</h1>
			<ButtonsJavaEdition taille="20" title={t('404.BACK')} path="/"/>
		</div>
	);
};

export default NotFound;