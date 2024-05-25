import Bet from "../Bet/Bet";
import RouletteState from "../../state/RouletteState";
import {observer} from "mobx-react-lite";
import Participants from "../Participants/Participants";
import Spinner from "../Spinner/Spinner";

import "./Roulette.css";

const Roulette = () => {
    return (
        <div className="roulette">
            <div className="roulette__text">
                6,34 sec
            </div>
            <div className="roulette__spiner">
                <Spinner items={[
                    {bet: 10, color: "#9A6BFF"},
                    {bet: 20, color: "#EF0358"},
                    {bet: 30, color: "#EF7403"},
                    {bet: 5, color: "#EAEF03"},
                    {bet: 10, color: "#0337EF"},
                    {bet: 15, color: "#03C4EF"},
                    {bet: 10, color: "#EA03EF"},
                    {bet: 10, color: "#3332AA"},
                    {bet: 1, color: "#c2ff32"},
                ]} />
            </div>
            {RouletteState.isBet ?
                null :
                <div className="roulette__bet">
                    <Bet/>
                </div>
            }
            <div className="roulette__participants">
                <Participants />
            </div>
        </div>
    )
}

export default observer(Roulette);