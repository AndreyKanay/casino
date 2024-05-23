import {FC} from "react";
import Avatar from "../Avatar/Avatar";
import {AVATAR_SIZE} from "../../constants/avatar_constants";

import "./Account.css";

const Account:FC = () => {
    return (
        <div className="account">
            <div className="account__inner">
                <div className="account__avatar">
                    <Avatar image={require('../../assets/images/avatar.png')} size={AVATAR_SIZE.SM}/>
                </div>
                <p className="account__balance">10,35 <span className="account__currency">ton</span></p>
            </div>
        </div>
    )
}

export default Account;