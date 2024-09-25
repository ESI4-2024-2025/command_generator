import React, {useState} from "react";
import ButtonsJavaEdition from "../utilities/ButtonsJavaEdition";
import "../../styles/AccountCreationOrConnexion.css";

function AccountCreationOrConnexion() {
	const [activeTab, setActiveTab] = useState("creation");

	return (
		<div className="account-creation-or-connexion">
			<div className="back-button-container">
				<ButtonsJavaEdition taille="20" title="<-- Retour" path="/"/>
			</div>
			<div className="tabs">
				<button className={`tab ${activeTab === "creation" ? "active" : ""}`}
						onClick={() => setActiveTab("creation")}>
					Création de compte
				</button>
				<button className={`tab ${activeTab === "connexion" ? "active" : ""}`}
						onClick={() => setActiveTab("connexion")}>
					Connexion
				</button>
			</div>
			<div className="tab-content">
				{activeTab === "creation" && <div>Contenu de la création de compte</div>}
				{activeTab === "connexion" && <div>Contenu de la connexion</div>}
			</div>
		</div>
	);
}

export default AccountCreationOrConnexion;