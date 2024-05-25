import {FC, PropsWithChildren} from "react";

import "./RadioButton.css";

interface RadioButtonProps extends PropsWithChildren {
    value: string | number;
    currentValue: string | number;
    onClick: () => void;
}

const RadioButton: FC<RadioButtonProps> = ({value, currentValue, children, onClick}) => {
    return (
        <div className={`radio-button ${value === currentValue ? "radio-button_is_active" : ""}`} onClick={onClick}>
            <p className="radio-button__label">{children}</p>
        </div>
    )
}

export default RadioButton;