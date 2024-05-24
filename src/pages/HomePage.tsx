import {FC, useState} from "react";
import Background from "../components/Background/Background";
import Header from "../components/Header/Header";
import ModalWindow from "../components/Modal/ModalWindow";
import "./HomePage.css"
import Menu from "../components/Menu/Menu";


const HomePage:FC = () => {

    const [isOpenFAQ, setIsOpenFAQ] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return (
        <div className="main">
            <ModalWindow isOpenFAQ={isOpenFAQ} setIsOpenFAQ={setIsOpenFAQ}/>
            <Menu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>
            <Header isOpenFAQ={isOpenFAQ} setIsOpenFAQ={setIsOpenFAQ} isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>
            <Background />
        </div>
    )
}

export default HomePage;