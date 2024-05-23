import Button from "../Buttons/Button";
import {BUTTON_SIZE} from "../../constants/button_constants";

import "./Bet.css";
import {useState} from "react";

const Bet = () => {
    const [bet, setBet] = useState<number>(1);
    const [lastAmount, setLastAmount] = useState<number>(1)
    const [userBalance, setUserBalance] = useState<number>(10.35);
    const addedBet = (amount: number) => {
        setLastAmount(amount)
        if (bet + amount >= userBalance) {
            setBet(userBalance);
            return
        }
        setBet(bet + amount)
    }

    const removeBet = (amount: number) => {
        if (bet <= lastAmount) {
            return
        }
        setBet(bet - amount)
    }

    return (
        <div className="bet">
            <div className="bet__counter">
                <div className="bet__counter-top">
                    <button className="bet__btn bet__btn_font-size_big" onClick={() => removeBet(lastAmount)}>-</button>
                    <div className="bet__count">
                        <p className="bet__count-text">
                            {bet.toFixed(2).replace('.', ',')}
                            <span className="bet__currency">ton</span>
                        </p>
                    </div>
                    <button className="bet__btn bet__btn_font-size_big" onClick={() => addedBet(lastAmount)}>+</button>
                </div>
                <div className="bet__counter-sep"></div>
                <div className="bet__counter-bottom">
                    <button className="bet__btn" onClick={() => addedBet(0.1)}>+0.1</button>
                    <button className="bet__btn" onClick={() => addedBet(0.25)}>+0.25</button>
                    <button className="bet__btn" onClick={() => addedBet(0.5)}>+0.5</button>
                    <button className="bet__btn" onClick={() => addedBet(1)}>+1</button>
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