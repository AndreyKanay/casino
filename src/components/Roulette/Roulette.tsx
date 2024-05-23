import Bet from "../Bet/Bet";

const Roulette = () => {
    return (
        <div className="roulette">
            <div className="roulette__text"></div>
            <div className="roulette__spiner"></div>
            <div className="roulette__bet">
                <Bet />
            </div>
            <div className="roulette__participants"></div>
        </div>
    )
}

export default Roulette;