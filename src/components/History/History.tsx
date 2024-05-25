import {FC} from "react";
import HistoryItem from "./HistoryItem";
import AccountState from "../../state/AccountState";

import "./History.css";

const History: FC = () => {
    return (
        <div className="history">
            {AccountState.history.map((item, index) =>
                <HistoryItem result={item.result}
                             bet={item.bet}
                             totalBet={item.totalBet}
                             coefficient={item.coefficient}/>)}
        </div>
    )
}

export default History;