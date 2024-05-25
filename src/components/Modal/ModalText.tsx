import {FC, PropsWithChildren} from "react";
import "./ModalText.css";

interface ModalTextProps extends PropsWithChildren {
}

const ModalText: FC<ModalTextProps> = ({children}) => {
    return <p className="modal-text">{children}</p>
}

export default ModalText;