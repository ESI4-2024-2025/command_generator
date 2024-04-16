import "../../styles/ButtonsJavaEdition.css"
import { Link, useNavigate } from "react-router-dom";

interface McButtonsProps {
    taille: string;
    title: string;
    path: string;
}

const ButtonsJavaEdition: React.FC<McButtonsProps> = ({ taille, title, path }) => {


    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    if (path === "goback") {
        return (
            <div className="McButtons" data-testid="ButtonsJavaEdition" onClick={goBack}>
                <div className={`mc-button full btn-taille-${taille}`}>
                    <div className="title">{title}</div>
                </div>
            </div>
        )
    } else {
        return (
            <Link to={`/${path}`}>
                <div className="McButtons" data-testid="ButtonsJavaEdition">
                    <div className={`mc-button full btn-taille-${taille}`}>
                        <div className="title">{title}</div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default ButtonsJavaEdition