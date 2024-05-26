import {FC} from "react";
import {polarToCartesian} from "../../helpers/polarToCartesian";
import {getArcPath} from "../../helpers/getArcPath";

interface SVGArcProps {
    color: string;
    startAngle: number;
    endAngle: number;
    radius: number;
    cutoutRadius: number;
}

const SVGArc:FC<SVGArcProps> = ({color, startAngle, endAngle, radius, cutoutRadius}) => {
    if (endAngle - startAngle >= 360) {
        const largeArcFlag = 0
        const outerStart = polarToCartesian(radius, radius, 0)
        const outerMid = polarToCartesian(radius, radius, 180)
        const outerEnd = polarToCartesian(radius, radius, 360)
        const innerStart = polarToCartesian(radius, cutoutRadius, 0)
        const innerMid = polarToCartesian(radius, cutoutRadius, 180)
        const innerEnd = polarToCartesian(radius, cutoutRadius, 360)

        const path = [
            'M',
            outerStart.x,
            outerStart.y,
            'A',
            radius,
            radius,
            0,
            largeArcFlag,
            1,
            outerMid.x,
            outerMid.y,
            'A',
            radius,
            radius,
            0,
            largeArcFlag,
            1,
            outerEnd.x,
            outerEnd.y,
            'L',
            innerEnd.x,
            innerEnd.y,
            'A',
            cutoutRadius,
            cutoutRadius,
            0,
            largeArcFlag,
            0,
            innerMid.x,
            innerMid.y,
            'A',
            cutoutRadius,
            cutoutRadius,
            0,
            largeArcFlag,
            0,
            innerStart.x,
            innerStart.y,
            'Z',
        ].join(' ')

        return <path fill={color} d={path} />
    }

    const path = getArcPath(radius, cutoutRadius, startAngle, endAngle)

    return <path fill={color} d={path} />
}

export default SVGArc;