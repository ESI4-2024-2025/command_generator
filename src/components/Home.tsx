import ButtonsJavaEdition from "./utilities/ButtonsJavaEdition";
import "../styles/Home.css"

function Home() {

    return (
        <div className="home" data-testid="Home">

            <div className="home-buttons">
                <ButtonsJavaEdition title="GIVE"
                    taille="19"
                    path="give" />
            </div>
        </div>
    )

}

export default Home