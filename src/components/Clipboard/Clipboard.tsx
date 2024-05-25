import {FC} from "react";

import "./Clipboard.css";

interface ClipboardProps {
    label: string;
    value: string;
}

const Clipboard: FC<ClipboardProps> = ({label, value}) => {
    const onClickCopyToClipboardHandler = () => {
        navigator.clipboard.writeText(value).then(res => {
            console.log(res)
        })
    }
    return (
        <div className="clipboard">
            <div className="clipboard__content">
                <p className="clipboard__label">{label}</p>
                <p className="clipboard__value">{value}</p>
            </div>
            <div className="clipboard__action">
                <button className="clipboard__button" onClick={onClickCopyToClipboardHandler}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="26"
                        fill="none"
                        viewBox="0 0 20 26"
                    >
                        <rect
                            width="12.5"
                            height="17.5"
                            x="1.25"
                            y="1.75"
                            stroke="#2B3F6C"
                            rx="3.75"
                        ></rect>
                        <rect
                            width="12.5"
                            height="17.5"
                            x="1.25"
                            y="1.75"
                            stroke="url(#paint0_linear_2029_4)"
                            rx="3.75"
                        ></rect>
                        <rect
                            width="12.5"
                            height="17.5"
                            x="1.25"
                            y="1.75"
                            stroke="url(#paint1_linear_2029_4)"
                            rx="3.75"
                        ></rect>
                        <rect
                            width="12.5"
                            height="17.5"
                            x="1.25"
                            y="1.75"
                            stroke="url(#paint2_linear_2029_4)"
                            rx="3.75"
                        ></rect>
                        <path
                            stroke="#2B3F6C"
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="M16.875 7.252A3.749 3.749 0 0118.75 10.5v10A3.75 3.75 0 0115 24.25h-5c-1.388 0-2.6-.754-3.248-1.875"
                        ></path>
                        <path
                            stroke="url(#paint3_linear_2029_4)"
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="M16.875 7.252A3.749 3.749 0 0118.75 10.5v10A3.75 3.75 0 0115 24.25h-5c-1.388 0-2.6-.754-3.248-1.875"
                        ></path>
                        <path
                            stroke="url(#paint4_linear_2029_4)"
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="M16.875 7.252A3.749 3.749 0 0118.75 10.5v10A3.75 3.75 0 0115 24.25h-5c-1.388 0-2.6-.754-3.248-1.875"
                        ></path>
                        <path
                            stroke="url(#paint5_linear_2029_4)"
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="M16.875 7.252A3.749 3.749 0 0118.75 10.5v10A3.75 3.75 0 0115 24.25h-5c-1.388 0-2.6-.754-3.248-1.875"
                        ></path>
                        <defs>
                            <linearGradient
                                id="paint0_linear_2029_4"
                                x1="7.477"
                                x2="7.476"
                                y1="-0.998"
                                y2="22.827"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#9A6BFF"></stop>
                                <stop offset="1" stopColor="#1C79AE"></stop>
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_2029_4"
                                x1="7.482"
                                x2="7.482"
                                y1="1.75"
                                y2="19.25"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#9A6BFF"></stop>
                                <stop offset="1" stopColor="#C8AEFF"></stop>
                            </linearGradient>
                            <linearGradient
                                id="paint2_linear_2029_4"
                                x1="6.591"
                                x2="13.209"
                                y1="2.917"
                                y2="3.831"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#9A6BFF"></stop>
                                <stop offset="1" stopColor="#C8AEFF"></stop>
                            </linearGradient>
                            <linearGradient
                                id="paint3_linear_2029_4"
                                x1="12.729"
                                x2="12.728"
                                y1="4.583"
                                y2="27.725"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#9A6BFF"></stop>
                                <stop offset="1" stopColor="#1C79AE"></stop>
                            </linearGradient>
                            <linearGradient
                                id="paint4_linear_2029_4"
                                x1="12.734"
                                x2="12.733"
                                y1="7.252"
                                y2="24.25"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#9A6BFF"></stop>
                                <stop offset="1" stopColor="#C8AEFF"></stop>
                            </linearGradient>
                            <linearGradient
                                id="paint5_linear_2029_4"
                                x1="11.879"
                                x2="18.234"
                                y1="8.385"
                                y2="9.252"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#9A6BFF"></stop>
                                <stop offset="1" stopColor="#C8AEFF"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Clipboard;