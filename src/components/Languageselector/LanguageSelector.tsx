import React from "react";
import {useTranslation} from "react-i18next";
import "../../styles/LanguageSelector.css";

interface LanguageSelectorProps {
	setLanguage: (lng: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({setLanguage}) => {
	const {i18n} = useTranslation();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
		setLanguage(lng);
	};

	return (
		<div className="language-selector">
			<select onChange={(e) => changeLanguage(e.target.value)}
					defaultValue={i18n.language}>
				<option value="en">English</option>
				<option value="fr">Français</option>
			</select>
		</div>
	);
};

export default LanguageSelector;