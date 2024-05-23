import {FC} from "react";
import Avatar from "../Avatar/Avatar";
import {AVATAR_SIZE} from "../../constants/avatar_constants";

import './ParticipantsItem.css'

const ParticipantsItem:FC = () => {
    return (
        <div className="participant">
            <div className="participant__inner">
                <div className="participant__background">
                    <div className="participant__avatar">
                        <Avatar image={require('../../assets/images/avatar.png')} size={AVATAR_SIZE.MD}/>
                    </div>
                    <p className="participant__percentage">25%</p>
                </div>
                <p className="participant__bet">1 <span className="participant__currency">ton</span></p>
            </div>
        </div>
    )
}

export default ParticipantsItem;