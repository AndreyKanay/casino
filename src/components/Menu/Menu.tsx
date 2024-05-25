import {FC} from "react";
import IconButton from "../Buttons/IconButton";
import {MENU} from "../../constants/menu";
import MenuItem from "./MenuItem";

import AppState from "../../state/AppState";
import {observer} from "mobx-react-lite";

import "./Menu.css";

const Menu: FC = () => {
    const onCloseMenuHandler = () => {
        AppState.setIsShowMenu(false)
    }

    return (
        <div className={`menu ${AppState.isShowMenu ? "menu_is_show" : ""}`}>
            <div className="menu__inner">
                <div className="menu__header">
                    <div className="menu__action">
                        <IconButton onClick={onCloseMenuHandler}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"
                                 fill="none">
                                <path d="M1 1L19.3848 19.3848" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M19.3848 1L0.99999 19.3848" stroke="white" strokeWidth="2"
                                      strokeLinecap="round"/>
                            </svg>
                        </IconButton>
                    </div>
                </div>
                <div className="menu__content">
                    {MENU.map(((item, index) => {
                        return (
                            <MenuItem key={`menu_${index}`} label={item.label} action={item.action}/>
                        )
                    }))}
                </div>
            </div>
        </div>
    )
}

export default observer(Menu);