import {FC, PropsWithChildren} from "react";
import './ButtonPlay.css';

export interface IconButtonProps extends PropsWithChildren {
    onClick: () => void;
}

const ButtonPlay:FC<IconButtonProps> = ({ children, onClick }) => {
    return (
        <button className="icon-button-play" onClick={onClick}>
            <p className="icon-button-play-text">ИГРАТЬ</p>
        </button>
    )
}

export default ButtonPlay;