
import ButtonPlay from "../Buttons/ButtonPlay";
import IconButton from "../Buttons/IconButton"
import "./Referral.css"

interface ReferralProps {
    isOpenReferral: boolean;
    setIsOpenReferral: any;
  }

const Referral: React.FC<ReferralProps> = ({ isOpenReferral, setIsOpenReferral }) => {

  return (
    <div>
        {isOpenReferral && (
          <div className='modal-window'>
                  <div className="modal-window-name">
                    <p className="modal-window-name-text">REFERRAL</p>
                  </div>
                  {isOpenReferral && (
                    <div className="referral-wrapper">
                        <div className="referral-top">
                            <p className="referral-top-title">YOUR REFERRAL</p>
                            <div className="referral-top-info">
                                <p className="referral-top-info-title">Refer friends and earn TONs on every game</p>
                                <div className="referral-top-info-box">
                                    <p className="referral-top-info-box-percent">30%</p>
                                    <p className="referral-top-info-box-about">from our comission from the winning bet(1%) </p>
                                </div>
                                <div className="referral-top-info-box box-hide">
                                  <div className="referral-top-info-box-text">
                                    <p className="referral-top-info-box-your">Your referral ID</p>
                                    <p className="referral-top-info-box-your text-gradient">24235236</p>
                                  </div>
                                  {/* <img src="src/assets/images/Copy.svg" alt="icon" height={30} width={30}/> */}
                                </div>
                                <div className="referral-top-info-box box-hide">
                                  <div className="referral-top-info-box-text">
                                    <p className="referral-top-info-box-your">Your referral link</p>
                                    <p className="referral-top-info-box-your text-gradient">tg.me/TONWheel/24235236</p>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-window-referral-bottom">
                            
                        </div>
                    </div>
                  )}
                  <div className="modal-window-btn">
                    <IconButton onClick={() => setIsOpenReferral(!isOpenReferral)}>
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8L20 20" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <path d="M20 8L8 20" stroke="white" stroke-width="2" stroke-linecap="round"/>
                      </svg>
                    </IconButton>
                  </div>
                  <div className="modal-window-btn-play">
                    <ButtonPlay onClick={() => setIsOpenReferral(!isOpenReferral)}>
                      ?
                    </ButtonPlay>
                  </div>
          </div>
        )}
    </div>
  )
}

export default Referral
