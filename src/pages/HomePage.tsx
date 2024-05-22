import {FC} from "react";
import Background from "../components/Background/Background";
import Header from "../components/Header/Header";

const HomePage:FC = () => {
    return (
        <div className="main">
            <Header />
            <Background />
        </div>
    )
}

export default HomePage;