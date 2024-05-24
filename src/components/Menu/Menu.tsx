import { useState } from "react";
import Button from "../Buttons/Button";
import ButtonPlay from "../Buttons/ButtonPlay";
import IconButton from "../Buttons/IconButton"
import "./Menu.css"

interface MenuProps {
    isOpenMenu: boolean;
    setIsOpenMenu: any;
  }

const Menu: React.FC<MenuProps> = ({ isOpenMenu, setIsOpenMenu }) => {

  return (
    <div>
        {isOpenMenu && (
          <div className='menu-window'>
            <div className="menu-window-btn">
                <IconButton onClick={() => setIsOpenMenu(!isOpenMenu)}>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8L20 20" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <path d="M20 8L8 20" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </IconButton>
            </div>
            <div className="menu-window-list">
                <p className="menu-window-list-one menu-window-list-color">HISTORY</p>
                <p className="menu-window-list-one">REFFERAL</p>
                <p className="menu-window-list-one menu-window-list-color">TOP USERS</p>
            </div>
          </div>
        )}
    </div>
  )
}

export default Menu
