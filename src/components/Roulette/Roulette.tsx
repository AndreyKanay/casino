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
                <Spinner items={RouletteState.participantsForSpinner} totalBet={RouletteState.totalBet}/>
            </div>
            {RouletteState.isBet ?
                null :
                <div className="roulette__bet">
                    <Bet/>
                </div>
            }
            <div className="roulette__participants">
                <Participants item={RouletteState.participantsForList} />
            </div>
        </div>
    )
}

export default observer(Roulette);