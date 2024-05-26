import {FC, Fragment, useMemo} from "react";
import {observer} from "mobx-react-lite";
import {sum} from "../../helpers/array";
import SVGArc from "../SVG/SVGArc";
import {getRandomColor} from "../../helpers/getRandomHexColor";

import "./Spinner.css"
import SpinnerCursor from "./SpinnerCursor";
import {getRandomGradient} from "../../helpers/getGradient";

const cutoutRadiusShare = 0.6;
const totalDegrees = 360;
const spaceBetweenInDegrees = 0;

export interface PieChartItem {
    bet: number;
    color: string;
}

interface PieChartItemWithAngle extends PieChartItem {
    startAngle: number
    endAngle: number
}

const getItemsWithAngles = (items: PieChartItem[]): PieChartItemWithAngle[] => {
    const total = sum(items.map((item) => item.bet))

    const itemsWithAngles: PieChartItemWithAngle[] = []

    items.forEach((item, index) => {
        const startAngle = index === 0 ? 0 : itemsWithAngles[index - 1].endAngle
        const endAngle = startAngle + (item.bet / total) * totalDegrees

        itemsWithAngles.push({
            ...item,
            startAngle,
            endAngle,
        })
    })

    return itemsWithAngles
}


interface SpinnerProps {
    items: PieChartItem[],
    totalBet: number
}

const Spinner: FC<SpinnerProps> = ({items, totalBet}) => {
    const itemsWithAngles = useMemo(() => {
        const result = getItemsWithAngles(items.filter((item) => item.bet > 0))

        if (!result.length) {
            result.push({
                bet: 1,
                color: getRandomGradient(),
                startAngle: 0,
                endAngle: totalDegrees,
            })
        }

        return result
    }, [items]);

    const radius = 100
    const cutoutRadius = radius * cutoutRadiusShare

    const total = sum(items.map((item) => item.bet))

    return (
        <div className="spinner">
            <div className="spinner__cursor">
                <SpinnerCursor/>
            </div>
            <svg viewBox="0 0 200 200" className="spinner__circle">
                <defs>
                    <linearGradient
                        id="gradient_0"
                        x1="128.455"
                        y1="6"
                        x2="175.263"
                        y2="15.0492"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#9A6BFF"/>
                        <stop offset="1" stopColor="#C8AEFF"/>
                    </linearGradient>
                    <linearGradient
                        id="gradient_1"
                        x1="128.455"
                        y1="6"
                        x2="175.263"
                        y2="15.0492"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#EF0358"/>
                        <stop offset="1" stopColor="#FF6480"/>
                    </linearGradient>
                    <linearGradient
                        id="gradient_2"
                        x1="128.455"
                        y1="6"
                        x2="175.263"
                        y2="15.0492"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#EF7403"/>
                        <stop offset="1" stopColor="#FFDA64"/>
                    </linearGradient>
                    <linearGradient
                        id="gradient_3"
                        x1="128.455"
                        y1="6"
                        x2="175.263"
                        y2="15.0492"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#EAEF03"/>
                        <stop offset="1" stopColor="#D7FF64"/>
                    </linearGradient>
                    <linearGradient
                        id="gradient_4"
                        x1="128.455"
                        y1="6"
                        x2="175.263"
                        y2="15.0492"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#0337EF"/>
                        <stop offset="1" stopColor="#646AFF"/>
                    </linearGradient>
                    <linearGradient
                        id="gradient_5"
                        x1="128.455"
                        y1="6"
                        x2="175.263"
                        y2="15.0492"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#03C4EF"/>
                        <stop offset="0.0001" stopColor="#03C4EF"/>
                        <stop offset="1" stopColor="#64FFFF"/>
                    </linearGradient>
                    <linearGradient
                        id="gradient_6"
                        x1="128.455"
                        y1="6"
                        x2="175.263"
                        y2="15.0492"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#EA03EF"/>
                        <stop offset="1" stopColor="#F364FF"/>
                    </linearGradient>
                    <linearGradient
                        id="gradient_7"
                        x1="128.455"
                        y1="6"
                        x2="175.263"
                        y2="15.0492"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#1FF31B"/>
                        <stop offset="1" stopColor="#A8FF64"/>
                    </linearGradient>
                    <linearGradient
                        id="gradient_8"
                        x1="128.455"
                        y1="6"
                        x2="175.263"
                        y2="15.0492"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#EF0303"/>
                        <stop offset="1" stopColor="#FF6464"/>
                    </linearGradient>
                    <linearGradient
                        id="gradient_9"
                        x1="128.455"
                        y1="6"
                        x2="175.263"
                        y2="15.0492"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#6B03EF"/>
                        <stop offset="1" stopColor="#8364FF"/>
                    </linearGradient>
                    <linearGradient
                        id="gradient_10"
                        x1="128.455"
                        y1="6"
                        x2="175.263"
                        y2="15.0492"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#03EF8C"/>
                        <stop offset="1" stopColor="#64FF86"/>
                    </linearGradient>
                </defs>
                {itemsWithAngles.map(
                    (
                        {color, startAngle, endAngle, bet},
                        index,
                    ) => {
                        if (bet === 0) {
                            return null
                        }

                        const percentage = Math.round((bet * 100) / total)

                        return (
                            <Fragment key={index}>
                                <SVGArc
                                    color={color}
                                    radius={radius}
                                    cutoutRadius={cutoutRadius}
                                    startAngle={startAngle}
                                    endAngle={endAngle - spaceBetweenInDegrees}
                                />
                                <SVGArc
                                    color={color}
                                    radius={radius}
                                    cutoutRadius={radius * 0.96}
                                    startAngle={startAngle}
                                    endAngle={endAngle - spaceBetweenInDegrees}
                                />
                            </Fragment>
                        )
                    },
                )}
            </svg>
            <div className="spinner__total-bet">
                <p className="spinner__total-bet-amount">
                    {totalBet}
                </p>
                <p className="spinner__total-bet-currency">ton</p>
            </div>
        </div>
    )
}

export default observer(Spinner)