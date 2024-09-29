import React, {useEffect} from "react";
import "../../styles/Changelog.css";
import ButtonsJavaEdition from "../utilities/ButtonsJavaEdition";
import ReactMarkdown from "react-markdown";

function Changelog() {

	const [markdownContent, setMarkdownContent] = React.useState("");

	useEffect(() => {
		fetch("/changelog.md")
			.then((response) => response.text())
			.then((text) => setMarkdownContent(text));
	}, []);

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