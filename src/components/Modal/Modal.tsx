import {FC, PropsWithChildren} from "react";
import Button from "../Buttons/Button";
import IconButton from "../Buttons/IconButton";

import "./Modal.css";

interface ModalProps extends PropsWithChildren {
    title: string;
    isShow: boolean;
    closeButtonText: string;
    onClose: () => void;
}

const Modal: FC<ModalProps> = ({title, isShow, closeButtonText, onClose, children}) => {
    if (!isShow) return (<></>);

    return (
        <div className={`modal ${isShow ? 'modal_is_show' : ''}`}>
            <div className="modal__inner">
                <div className="modal__header">
                    <div className="modal__header-title">
                        <p className="modal__title">{title}</p>
                    </div>
                    <div className="modal__header-action">
                        <IconButton onClick={onClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"
                                 fill="none">
                                <path d="M1 1L19.3848 19.3848" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M19.3848 1L0.99999 19.3848" stroke="white" strokeWidth="2"
                                      strokeLinecap="round"/>
                            </svg>
                        </IconButton>
                    </div>
                </div>
                <div className="modal__content">
                    {children}
                </div>
                <div className="modal__action">
                    <Button text={closeButtonText} onClick={onClose}/>
                </div>
            </div>
        </div>
    )
}

export default Modal;