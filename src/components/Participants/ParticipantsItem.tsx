import {FC} from "react";
import Avatar from "../Avatar/Avatar";
import {AVATAR_SIZE} from "../../constants/avatar_constants";

import './ParticipantsItem.css'

interface ParticipantsItemProps {
    avatar: string;
    bet: number;
    percentage: number;
}

const ParticipantsItem:FC<ParticipantsItemProps> = ({avatar, bet, percentage}) => {
    return (
        <div className="participant">
            <div className="participant__inner">
                <div className="participant__background">
                    <div className="participant__avatar">
                        <Avatar image={avatar} size={AVATAR_SIZE.MD}/>
                    </div>
                    <p className="participant__percentage">{percentage.toFixed(2)}%</p>
                </div>
                <p className="participant__bet">{bet.toFixed(2)} <span className="participant__currency">ton</span></p>
            </div>
        </div>
    )
}

export default ParticipantsItem;