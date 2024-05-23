import {FC} from "react";
import Background from "../components/Background/Background";
import Header from "../components/Header/Header";
import Roulette from "../components/Roulette/Roulette";

const HomePage:FC = () => {
    return (
        <div className="main">
            <Header />
            <Roulette />
            <Background />
        </div>
    )
}

export default HomePage;