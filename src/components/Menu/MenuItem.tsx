import {FC} from "react";
import {IMenuItem} from "../../interfaces/IMenuItem";

import "./MenuItem.css";
import AppState from "../../state/AppState";

interface MenuItemProps extends IMenuItem {}

const MenuItem:FC<MenuItemProps> = ({label, action}) => {
    const onClickHandler = () => {
        action();
        AppState.setIsShowMenu(false);
    }

    return (
        <button className="menu__item" onClick={onClickHandler}>
            {label}
        </button>
    )
};

export default MenuItem;