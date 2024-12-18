import "./Header.css";
import IconButton from "../Buttons/IconButton";
import Account from "../Account/Account";
import AppState from "../../state/AppState";

const Header = () => {

    const onOpenFAQModalHandler = () => {
        AppState.setIsShowFAQModal(true)
    }

    const onOpenMenuHandler = () => {
        AppState.setIsShowMenu(true)
    }

    return (
        <div className="header">
            <div className="header__left">
                <Account />
            </div>
            <div className="header__right">
                <IconButton onClick={onOpenFAQModalHandler}>
                    ?
                </IconButton>
                <IconButton onClick={onOpenMenuHandler}>
                    <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H27" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M1 9H27" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M1 17H27" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </IconButton>
            </div>
        </div>
    )
};

export default Header;