import {useNavigate} from "react-router-dom";
import "../../styles/ButtonsJavaEdition.css";

interface McButtonsProps {
    taille: string;
    title: string;
    path?: string;
    onClick?: () => void;
    disabled?: boolean;
}

const ButtonsJavaEdition: React.FC<McButtonsProps> = ({ taille, title, path, onClick, disabled }) => {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (path === "goback") {
            goBack();
        } else if (path) {
            navigate(path);
        }
    }

    const buttonClass = `mc-button full btn-taille-${taille} ${disabled ? 'disabled' : ''}`;

    return (
        <div className="McButtons" data-testid="ButtonsJavaEdition" onClick={handleClick}>
            <div className={buttonClass}>
                <div className="title">{title}</div>
            </div>
        </div>
    )
}

export default ButtonsJavaEdition;