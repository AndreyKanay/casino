import Button from "../Buttons/Button";
import {BUTTON_SIZE} from "../../constants/button_constants";

import "./Bet.css";

const Bet = () => {
    return (
        <div className="bet">
            <div className="bet__counter">
                <div className="bet__counter-top">
                    <button className="bet__btn bet__btn_font-size_big">-</button>
                    <div className="bet__count">
                        <p className="bet__count-text">
                            1.00
                            <span className="bet__currency">ton</span>
                        </p>
                    </div>
                    <button className="bet__btn bet__btn_font-size_big">+</button>
                </div>
                <div className="bet__counter-sep"></div>
                <div className="bet__counter-bottom">
                    <button className="bet__btn">+0.1</button>
                    <button className="bet__btn">+0.25</button>
                    <button className="bet__btn">+0.5</button>
                    <button className="bet__btn">+1</button>
                </div>
            </div>
            <div className="bet__action">
                <Button text="Ставка" onClick={() => {
                }} size={BUTTON_SIZE.LG} fullwidth />
            </div>
        </div>
    )
}

export default Bet;