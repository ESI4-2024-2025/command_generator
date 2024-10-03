import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	return (
		<div className="language-selector">
			<select onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language}>
				<option value="en">English</option>
				<option value="fr">Français</option>
			</select>
		</div>
	);
};

export default LanguageSelector;