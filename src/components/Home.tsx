import ButtonsJavaEdition from "./utilities/ButtonsJavaEdition";
import "../styles/Home.css"

function Home() {

    return (
        <div className="home">

            <div className="home-buttons" data-testid="Home">
                <ButtonsJavaEdition title="GIVE"
                    taille="19"
                    path="give" />
                <ButtonsJavaEdition title="ENCHANT"
                    taille="19"
                    path="enchant" />
            </div>
        </div>
    )

}

export default Home