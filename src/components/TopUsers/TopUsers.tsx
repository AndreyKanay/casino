import {FC, useState} from "react";
import TopUsersState from "../../state/TopUsersState";
import Box from "../Box/Box";
import Avatar from "../Avatar/Avatar";
import {AVATAR_SIZE} from "../../constants/avatar_constants";

import "./TopUsers.css"

const TopUsers: FC = () => {
    const [filter, setFilter] = useState<"all" | "my" | "top">("all");

    return (
        <div className="top-users">
            <div className="top-users__data-filter">
                <button className={`top-users__button ${filter === "all" ? "top-users__button_is_active" : ""}`}
                        onClick={() => setFilter("all")}>All
                </button>
                <button className={`top-users__button ${filter === "my" ? "top-users__button_is_active" : ""}`}
                        onClick={() => setFilter("my")}>My
                </button>
                <button className={`top-users__button ${filter === "top" ? "top-users__button_is_active" : ""}`}
                        onClick={() => setFilter("top")}>Top
                </button>
            </div>
            {TopUsersState.top[filter].map((item, index) => (
                <div className="top-users__item">
                    <Box>
                        <div key={`top-users_${String(+Date.now() + Math.random())}`} className="top-users__content">
                            <div className="top-users__avatar">
                                <Avatar image={item.avatar} size={AVATAR_SIZE.LG} />
                            </div>
                            <div className="top-users__details">
                                <div className="top-users__details-row">
                                    <p className="top-users__details-label">Bet:</p>
                                    <div className="top-users__details-value">
                                        {item.bet}
                                    </div>
                                </div>
                                <div className="top-users__details-row">
                                    <p className="top-users__details-label">Total bet:</p>
                                    <div className="top-users__details-value">
                                        {item.totalBet}
                                    </div>
                                </div>
                                <div className="top-users__details-row">
                                    <p className="top-users__details-label">Coeff:</p>
                                    <div className="top-users__details-value">
                                        {item.coefficient}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Box>
                </div>
            ))}
        </div>
    )
}

export default TopUsers;