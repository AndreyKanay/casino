import {FC} from "react";
import Box from "../Box/Box";
import {BOX_COLOR} from "../../constants/box_constants";

interface HistoryItemProps {
    result: string;
    bet: number;
    totalBet: number;
    coefficient: number;
}

const HistoryItem:FC<HistoryItemProps> = ({result, bet, totalBet, coefficient}) => {
    return (
        <div className="history__item">
            <Box color={result === "win" ? BOX_COLOR.PRIMARY : BOX_COLOR.DEFAULT}>
                <div className="history__content">
                    <div className="history__result">{result}</div>
                    <div className="history__details">
                        <div className="history__details-row">
                            <p className="history__details-label">Bet:</p>
                            <div className="history__details-value">
                                {bet}
                            </div>
                        </div>
                        <div className="history__details-row">
                            <p className="history__details-label">Total bet:</p>
                            <div className="history__details-value">
                                {totalBet}
                            </div>
                        </div>
                        <div className="history__details-row">
                            <p className="history__details-label">Coeff:</p>
                            <div className="history__details-value">
                                {coefficient}
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    )
}

export default HistoryItem;