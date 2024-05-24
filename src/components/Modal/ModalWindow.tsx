import { useState } from "react";
import Button from "../Buttons/Button";
import ButtonPlay from "../Buttons/ButtonPlay";
import IconButton from "../Buttons/IconButton"
import "./ModalWindow.css"
import FAQ from "../FAQ/FAQ";

interface ModalProps {
    isOpenFAQ: boolean;
    setIsOpenFAQ: any;
  }

const ModalWindow: React.FC<ModalProps> = ({ isOpenFAQ, setIsOpenFAQ }) => {

  return (
    <div>
        {isOpenFAQ && (
          <div className='modal-window'>
                  <div className="modal-window-name">
                    <p className="modal-window-name-text">FAQ</p>
                  </div>
                  {isOpenFAQ && (
                    <div className="modal-window-text">
                      <FAQ />
                    </div>
                  )}
                  <div className="modal-window-btn">
                    <IconButton onClick={() => setIsOpenFAQ(!isOpenFAQ)}>
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8L20 20" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <path d="M20 8L8 20" stroke="white" stroke-width="2" stroke-linecap="round"/>
                      </svg>
                    </IconButton>
                  </div>
                  <div className="modal-window-btn-play">
                    <ButtonPlay onClick={() => setIsOpenFAQ(!isOpenFAQ)}>
                      ?
                    </ButtonPlay>
                  </div>
          </div>
        )}
    </div>
  )
}

export default ModalWindow
