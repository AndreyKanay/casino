import {FC, PropsWithChildren} from "react";
import {BOX_COLOR} from "../../constants/box_constants";

import "./Box.css";

interface BoxProps extends PropsWithChildren {
    color?: BOX_COLOR;
}

const Box:FC<BoxProps> = ({color, children}) => {
    return (
        <div className={`box box_color_${color ? color : BOX_COLOR.DEFAULT}`}>
            <div className="box__inner">
                {children}
            </div>
        </div>
    )
}

export default Box;