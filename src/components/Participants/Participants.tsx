import ParticipantsItem from "./ParticipantsItem";
import './Participants.css';
import {IParticipantForList} from "../../interfaces/IParticipant";
import {FC} from "react";

interface ParticipantsProps {
        item: IParticipantForList[];
}

const Participants:FC<ParticipantsProps> = ({item}) => {
    return (
        <div className="participants">
                {item.map(item => (
                    <ParticipantsItem
                        key={`participants_${String(+Date.now() + Math.random())}`}
                        avatar={item.avatar}
                        percentage={item.percentage}
                        bet={item.bet}
                    />
                ))}
        </div>
    )
}

export default Participants;