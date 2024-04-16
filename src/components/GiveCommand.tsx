import ButtonsJavaEdition from "./utilities/ButtonsJavaEdition";
import "../styles/GiveCommand.css"

function Home() {

    return (
        <div className="give-command">

            <select name="item" id="item">
                <option value="sword">Sword</option>
            </select>

            <ButtonsJavaEdition taille="1" title="Retour" path="goback"/>
        </div>
    )

}

export default Home