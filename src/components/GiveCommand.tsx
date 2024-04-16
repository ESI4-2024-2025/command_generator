import ButtonsJavaEdition from "./utilities/ButtonsJavaEdition";
import "../styles/GiveCommand.css"

function GiveCommand() {

    return (
        <div className="give-command" data-testid="GiveCommand">

            <select name="item" id="item">
                <option value="sword">Sword</option>
                <option value="Pickaxe">Pickaxe</option>
                <option value="Shovel">Shovel</option>
            </select>

            <ButtonsJavaEdition taille="1" title="Retour" path="goback"/>
        </div>
    )
}

export default GiveCommand