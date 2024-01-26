import ButtonsJavaEdition from "@/Components/utilities/ButtonsJavaEdition.tsx";
import "@/styles/styles.css"


function Home() {

    return (
        <div className="Home">
            <ButtonsJavaEdition title="GIVE" taille="1" path="give"/>
            <ButtonsJavaEdition title="ENCHANT" taille="1" path="enchant"/>
        </div>
    )

}

export default Home