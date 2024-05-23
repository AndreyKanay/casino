import {FC} from "react";
import Background from "../components/Background/Background";
import Header from "../components/Header/Header";
import ModalWindow from "../components/Modal/ModalWindow";
import "./HomePage.css"


const HomePage:FC = () => {
    return (
        <div className="main">
            <ModalWindow />
            <Header />
            <Background />
        </div>
    )
}

export default HomePage;