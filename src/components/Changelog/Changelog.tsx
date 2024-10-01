import React from "react";
import "../../styles/Changelog.css";
import ButtonsJavaEdition from "../utilities/ButtonsJavaEdition";
import ReactMarkdown from "react-markdown";

function Changelog() {

	const markdownContent = `# V2.2
*01-10-2024*

**Global :**

- ajout d'une notification orange "info" pour les informations/semi erreurs

**/give :**

- suppression de l'option "Select an item" dans le select des items, si jamais cette valeur a téte modifiée
- impossible de copier une commande s'il y a un message d'erreur du type "Material is not selected." et affichage d'une notification disant "impossible de copier une commande vide" si on essaie de copier

**Connexion et Creation :**

- retrait du \`é\` problématique dans le message "vérifier vos informations" et "erreur lors de la création"

**Home :**

- impossible de sélectionner et déplacer l'image de logo de la page d'accueil

___

# V2.1 
*29-09-2024*

**Global :**

- remplacement du Favicon react par une icône du bloc de dirt de minecraft
- création d'un composant de notification

**/give :**

- utilisation du composant pour la copie de la commande
- affichage d'un curseur "pointeur" au survol de l'output de génération de commande
- suppression petit carré gris sur le champ number dans firefox, qui décale aussi le texte sous chrome
- allignement des champs item, material et username
- utilisation de la règle des usernames minecraft pour le champ username *(All profile usernames require 3-16
  characters, all letters from the English alphabet, numbers from 0-9, and only an underscore for a special character)*

**Connexion et Creation :**

- utilisation du composant notification pour les erreurs possibles
- allignement des labels verticalement par rapport aux inputs
- possibilité d'appuyer sur entrée pour valider

**Home :**

- images de fond moins lourdes pour un affichage plus rapide

**Changelog :**

- page de changelog ajoutée

___

# V2.0 
*28-09-2024*

**Global :**

- ajout d'une description pour les intégrations (discord par exemple)
- fix de quelques typo
- rajout de données car il y avais des données incomplètes (un seul materiau pour la pioche par exemple)

**/give :**

- fix bug du a fait que la liste des valeurs des enchantements n'était pas reset lors du changement d'item
- fix bug du au fait qu'on ne savait pas encore gérer le cas ou il y a qu'un seul materiau
- fi bug du au fait qu'on reloadais pas les materiau lord du changement

**Connexion et Creation :**

- style de la page de connexion mis a jour
- style de la page de création de compte mis a jour
- se connecter ou créer un profil redirige vers la page d'informations de profil

**Profil :**

- la page de profil affiche les informations du profil connecté

**Home :**

- 11 nouveaux fonds de page d'accueil`;

	return (
		<div className="changelog-page">
			<h1 className="changelog-title">Changelog</h1>
			<div className="changelog" data-testid="Home">
				<ReactMarkdown>{markdownContent}</ReactMarkdown>
			</div>
			<div className="back-button">
				<ButtonsJavaEdition taille="20" title="<-- Retour" path="goback"/>
			</div>
		</div>
	);
}

export default Changelog;