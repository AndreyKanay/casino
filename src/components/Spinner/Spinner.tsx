import {FC, Fragment, useMemo} from "react";
import {observer} from "mobx-react-lite";
import {sum} from "../../helpers/array";
import SVGArc from "../SVG/SVGArc";
import {getRandomColor} from "../../helpers/getRandomHexColor";

import "./Spinner.css"
import SpinnerCursor from "./SpinnerCursor";

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
    items: PieChartItem[]
}

const Spinner: FC<SpinnerProps> = ({items}) => {
    const itemsWithAngles = useMemo(() => {
        const result = getItemsWithAngles(items.filter((item) => item.bet > 0))

        if (!result.length) {
            result.push({
                bet: 1,
                color: getRandomColor(),
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
                <SpinnerCursor />
            </div>
            <svg viewBox="0 0 200 200" className="spinner__circle">
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
                    22,00
                </p>
                <p className="spinner__total-bet-currency">ton</p>
            </div>
        </div>
    )
}

export default observer(Spinner)