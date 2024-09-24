import ButtonsJavaEdition from "./utilities/ButtonsJavaEdition";
import "../styles/Commands.css"

function Commands() {

    return (
        <div className="commands" data-testid="Home">

            <div className="commands-buttons">
                <ButtonsJavaEdition title="GIVE"
                    taille="19"
                    path="give" />
            </div>
        </div>
    )

}

export default Commands