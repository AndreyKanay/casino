import {AVATAR_SIZE} from "../../constants/avatar_constants";
import {FC} from "react";

import "./Avatar.css"

export interface AvatarProps {
    image: string;
    size?: AVATAR_SIZE;
}

const Avatar:FC<AvatarProps> = ({image, size}) => {
    return (
        <div className={`avatar avatar_size_${size ? size : 'md'}`}>
            <img className="avatar__image" src={image} alt=""/>
        </div>
    )
}

export default Avatar;