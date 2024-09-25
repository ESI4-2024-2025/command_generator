import ButtonsJavaEdition from "./components/utilities/ButtonsJavaEdition";
import "./styles/Home.css";
import { useEffect } from "react";
import logo from "./img/Logo.png";

function Home() {

    function getRandomBackgroundClass(): string {
        const classes = ["html-bg-1", "html-bg-2", "html-bg-3"];
        const randomIndex = Math.floor(Math.random() * classes.length);
        return classes[randomIndex];
    }

    useEffect(() => {
        const randomClass = getRandomBackgroundClass();
        document.documentElement.classList.add("home-page", randomClass);

        return () => {
            document.documentElement.classList.remove("home-page", randomClass);
        };
    }, []);

    return (
        <div className="home" data-testid="Home">
            <div className="home-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="home-buttons">
                <div>
                    <ButtonsJavaEdition title="Commands" taille="38" path="commands" />
                </div>
                <div className="home-buttons-dual">
                    <ButtonsJavaEdition title="Profil" taille="19" path="account" />
                    <ButtonsJavaEdition title="WIP" taille="19" path="commands" />
                </div>
            </div>
        </div>
    );
}

export default Home;