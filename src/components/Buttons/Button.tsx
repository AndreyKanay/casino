import {FC, ReactNode} from "react";
import {BUTTON_COLOR, BUTTON_SIZE} from "../../constants/button_constants";

import './Button.css';

export interface ButtonProps {
    text: string;
    onClick: () => void;
    icon?: ReactNode;
    size?: BUTTON_SIZE;
    color?: BUTTON_COLOR;
    fullwidth?: boolean;
}

const Button: FC<ButtonProps> = ({text, onClick, icon, size, color, fullwidth}) => {
    return (
        <button className={`button button_color_${color ? color : 'default'} button_size_${size ? size : 'md'} ${fullwidth ? 'button_fullwidth' : null}`} onClick={onClick}>
            {icon ? <span className="button__icon">{icon}</span> : null}
            <span className="button__text">{text}</span>
        </button>
    )
}

export default Button;