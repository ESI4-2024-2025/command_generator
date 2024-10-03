import ButtonsJavaEdition from "./utilities/ButtonsJavaEdition";
import "../styles/Commands.css";

function Commands() {
	return (
		<div className="commands-page">
			<h1 className="commands-title">Liste Des Commandes</h1>
			<div className="commands" data-testid="Home">
				<div className="commands-buttons">
					<ButtonsJavaEdition title="/give enchanted items" taille="35" path="give"/>
				</div>
			</div>
			<div className="back-button">
				<ButtonsJavaEdition taille="20" title="Retour" path="goback"/>
			</div>
		</div>
	);
}

export default Commands;