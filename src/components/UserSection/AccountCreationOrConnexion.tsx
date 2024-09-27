import React, { useState } from "react";
import ButtonsJavaEdition from "../utilities/ButtonsJavaEdition";
import "../../styles/AccountCreationOrConnexion.css";
import Creation from "./Creation";
import Connexion from "./Connexion";

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
                    Creation de compte
                </button>
                <button className={`tab ${activeTab === "connexion" ? "active" : ""}`}
                        onClick={() => setActiveTab("connexion")}>
                    Connexion
                </button>
            </div>
            <div className="tab-content">
                {activeTab === "creation" && <Creation />}
                {activeTab === "connexion" && <Connexion />}
            </div>
        </div>
    );
}

export default AccountCreationOrConnexion;