import {FC, useState} from "react";
import Background from "../components/Background/Background";
import Header from "../components/Header/Header";
import ModalWindow from "../components/Modal/ModalWindow";
import "./HomePage.css"


const HomePage:FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="main">
            <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Background />
        </div>
    )
}

export default HomePage;