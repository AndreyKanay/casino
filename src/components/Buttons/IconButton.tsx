import {FC, PropsWithChildren} from "react";
import './IconButton.css';

export interface IconButtonProps extends PropsWithChildren {
    onClick: () => void;
}

const IconButton:FC<IconButtonProps> = ({ children, onClick }) => {
    return (
        <button className="icon-button" onClick={onClick}>
            <span className="icon-button__inner">
                {children}
            </span>
        </button>
    )
}

export default IconButton;