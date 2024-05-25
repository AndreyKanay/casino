import Box from "../Box/Box";
import {BOX_COLOR} from "../../constants/box_constants";
import Clipboard from "../Clipboard/Clipboard";

import "./Referral.css";
import RadioButton from "../RadioButton/RadioButton";
import {useState} from "react";
import AccountState from "../../state/AccountState";

const FILTER = [
    {
        value: "all",
        label: "All"
    },
    {
        value: "yesterday",
        label: "Yesterday"
    },
    {
        value: "week",
        label: "This Week"
    },
    {
        value: "month",
        label: "This Month"
    }
]

const Referral = () => {
    const [filter, setFilter] = useState<string>("all")

    return (
        <div className="referral">
            <div className="referral__section">
                <p className="referral__title">Your referral</p>
                <p className="referral__text">Refer friends and earn TONs on every game</p>
                <Box color={BOX_COLOR.PRIMARY}>
                    <p className="referral__percentage">30%</p>
                    <p className="referral__description">from our commission from the winning bet(1%)</p>
                </Box>
                <Box>
                    <Clipboard label="Your referral ID" value="24235236"/>
                </Box>
                <Box>
                    <Clipboard label="Your referral link" value="tg.me/TONWheel/24235236"/>
                </Box>
            </div>
            <div className="referral__section">
                <p className="referral__title">Dashboard</p>
                <div className="referral__data-filter">
                    {FILTER.map(item => {
                        return (
                            <RadioButton value={item.value}
                                         currentValue={filter}
                                         onClick={() => setFilter(item.value)}>
                                {item.label}
                            </RadioButton>
                        )
                    })}
                </div>
                <Box>
                    <p className="referral__label">Your earnings</p>
                    <div className="referral__profit">{AccountState.getReferral(filter).profit} TON</div>
                    <p className="referral__label">Friends who started playing</p>
                    <div className="referral__friends">{AccountState.getReferral(filter).friends}</div>
                </Box>
            </div>
        </div>
    )
}

export default Referral;