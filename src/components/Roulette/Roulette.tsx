import Bet from "../Bet/Bet";
import RouletteState from "../../state/RouletteState";
import {observer} from "mobx-react-lite";

const Roulette = () => {
    return (
        <div className="roulette">
            <div className="roulette__text"></div>
            <div className="roulette__spiner"></div>
            {RouletteState.isBet ?
                null :
                <div className="roulette__bet">
                    <Bet/>
                </div>
            }
            <div className="roulette__participants"></div>
        </div>
    )
}

export default observer(Roulette);