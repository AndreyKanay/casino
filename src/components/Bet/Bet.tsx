import {useEffect} from "react";
import {observer} from "mobx-react-lite";

import AccountState from "../../state/AccountState";
import BetState from "../../state/BetState";

import Button from "../Buttons/Button";
import {BUTTON_SIZE} from "../../constants/button_constants";


import "./Bet.css";
import RouletteState from "../../state/RouletteState";


const Bet = () => {
    useEffect(() => {
        BetState.setMaxBet(AccountState.balance);
    }, [])

    const _addedBetHandler = (amount: number) => {
        BetState.addedBet(amount);
    }

    const _removeBetHandler = (amount: number) => {
        BetState.removedBet(amount);
    }

    const _placeBetHandler = () => {
        if (AccountState.balance < BetState.bet) {
            return;
        }

        AccountState.debiting(BetState.bet);
        BetState.setMaxBet(AccountState.balance);
        RouletteState.setIsBet(true);
    }

    return (
        <div className="bet">
            <div className="bet__counter">
                <div className="bet__counter-top">
                    <button className="bet__btn bet__btn_font-size_big"
                            onClick={() => _removeBetHandler(BetState.lastAmount)}>-
                    </button>
                    <div className="bet__count">
                        <p className="bet__count-text">
                            {BetState.betString}
                            <span className="bet__currency">ton</span>
                        </p>
                    </div>
                    <button className="bet__btn bet__btn_font-size_big"
                            onClick={() => _addedBetHandler(BetState.lastAmount)}>+
                    </button>
                </div>
                <div className="bet__counter-sep"></div>
                <div className="bet__counter-bottom">
                    <button className="bet__btn" onClick={() => _addedBetHandler(0.1)}>+0.1</button>
                    <button className="bet__btn" onClick={() => _addedBetHandler(0.25)}>+0.25</button>
                    <button className="bet__btn" onClick={() => _addedBetHandler(0.5)}>+0.5</button>
                    <button className="bet__btn" onClick={() => _addedBetHandler(1)}>+1</button>
                </div>
            </div>
            <div className="bet__action">

                {AccountState.balance > BetState.bet ?
                    <Button text="Ставка" onClick={_placeBetHandler} size={BUTTON_SIZE.LG} fullwidth/> :
                    <p>Недостаточно средств</p>}
            </div>
        </div>
    )
}

export default observer(Bet);