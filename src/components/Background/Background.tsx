import {FC} from "react";
import './Background.css';

const Background: FC = () => {
    return (
        <div className="background">
            <svg className="background__top-ellipse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244 112"
                 fill="none">
                <ellipse cx="122" cy="56" rx="122" ry="56" fill="url(#paint0_linear_119_2391)"/>
                <defs>
                    <linearGradient id="paint0_linear_119_2391" x1="104.255" y1="7.46667" x2="216.066" y2="54.5585"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9A6BFF"/>
                        <stop offset="1" stopColor="#C8AEFF"/>
                    </linearGradient>
                </defs>
            </svg>

            <svg className="background__left-circle" xmlns="http://www.w3.org/2000/svg" width="49" height="64"
                 viewBox="0 0 49 64" fill="none">
                <filter id="blur" width="160%" height="160%" x="-30%" y="-30%">
                    <feFlood floodColor="#fff" result="neutral"/>
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blurred"/>
                    <feMerge>
                        <feMergeNode in="neutral"/>
                        <feMergeNode in="blurred"/>
                    </feMerge>
                </filter>
                <circle id="backdrop_1" cx="17" cy="32" r="32" fill="url(#paint0_linear_119_2393)"/>
                <defs>
                    <linearGradient id="paint0_linear_119_2393" x1="12.3455" y1="4.26667" x2="45.6312" y2="10.7017"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9A6BFF"/>
                        <stop offset="1" stopColor="#C8AEFF"/>
                    </linearGradient>
                </defs>
            </svg>

            <svg className="background__right-circle" xmlns="http://www.w3.org/2000/svg" width="49" height="74"
                 viewBox="0 0 49 74" fill="none">
                <circle cx="37" cy="37" r="37" fill="url(#paint0_linear_37_612)"/>
                <defs>
                    <linearGradient id="paint0_linear_37_612" x1="31.6182" y1="4.93333" x2="70.1048" y2="12.3738"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9A6BFF"/>
                        <stop offset="1" stopColor="#C8AEFF"/>
                    </linearGradient>
                </defs>
            </svg>

            <svg className="background__left-ellipse" xmlns="http://www.w3.org/2000/svg" width="80" height="138"
                 viewBox="0 0 80 138" fill="none">
                <g filter="url(#filter0_b_37_615)">
                    <ellipse cx="17.3887" cy="69.0842" rx="38.9991" ry="84" transform="rotate(40.7689 17.3887 69.0842)"
                             fill="white" fillOpacity="0.1"/>
                    <path
                        d="M46.546 94.2245C31.4354 111.75 14.4724 124.753 -0.718925 131.621C-15.9519 138.507 -29.217 139.152 -37.1375 132.323C-45.0581 125.494 -46.3721 112.278 -41.8022 96.1974C-37.2447 80.1609 -26.8792 61.469 -11.7686 43.9439C3.34213 26.4188 20.3051 13.4155 35.4964 6.54776C50.7294 -0.338777 63.9944 -0.983896 71.915 5.84547C79.8356 12.6748 81.1496 25.8904 76.5797 41.971C72.0222 58.0075 61.6567 76.6993 46.546 94.2245Z"
                        stroke="url(#paint0_linear_37_615)"/>
                </g>
                <defs>
                    <filter id="filter0_b_37_615" x="-98.9229" y="-53.4594" width="232.623" height="245.087"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="27"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_37_615"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_37_615" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_37_615" x1="72.2415" y1="5.46679" x2="-37.4641" y2="132.702"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="1" stopColor="white" stopOpacity="0"/>
                    </linearGradient>
                </defs>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="138"
                 viewBox="0 0 80 138" fill="none">
                <defs>
                    <clipPath id="blur_left_ellipse">
                        <ellipse cx="17.3887" cy="69.0842" rx="38.9991" ry="84"
                                 transform="rotate(40.7689 17.3887 69.0842)"
                                 fill="fff" fillOpacity="1"/>
                    </clipPath>
                </defs>
            </svg>

            <svg className="background__left-blur-ellipse" xmlns="http://www.w3.org/2000/svg" width="225" height="396" viewBox="0 0 225 396" fill="none">
                <g filter="url(#filter0_f_9_2242)">
                    <ellipse cx="44.8644" cy="198.17" rx="37" ry="62" transform="rotate(21.1324 44.8644 198.17)"
                             fill="url(#paint0_linear_9_2242)"/>
                </g>
                <defs>
                    <filter id="filter0_f_9_2242" x="-134.459" y="0.607712" width="358.646" height="395.124"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="69.1" result="effect1_foregroundBlur_9_2242"/>
                    </filter>
                    <linearGradient id="paint0_linear_9_2242" x1="39.4825" y1="144.437" x2="78.8832" y2="148.982"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9A6BFF"/>
                        <stop offset="1" stopColor="#C8AEFF"/>
                    </linearGradient>
                </defs>
            </svg>

            <svg className="background__right-ellipse" xmlns="http://www.w3.org/2000/svg" width="62" height="139"
                 viewBox="0 0 62 139" fill="none">
                <g filter="url(#filter0_b_119_2394)">
                    <ellipse cx="61.7037" cy="69.5162" rx="38.9991" ry="84" transform="rotate(-39.7597 61.7037 69.5162)"
                             fill="white" fillOpacity="0.1"/>
                    <path
                        d="M91.2993 44.8934C106.099 62.6819 116.134 81.5535 120.408 97.6678C124.694 113.826 123.147 127.017 115.108 133.706C107.068 140.394 93.8165 139.516 78.7072 132.362C63.6392 125.228 46.9078 111.928 32.1082 94.1391C17.3085 76.3505 7.27381 57.479 2.99955 41.3647C-1.28644 25.2062 0.260076 12.0158 8.29972 5.32699C16.3394 -1.36181 29.591 -0.483157 44.7003 6.6706C59.7683 13.8048 76.4996 27.1049 91.2993 44.8934Z"
                        stroke="url(#paint0_linear_119_2394)"/>
                </g>
                <defs>
                    <filter id="filter0_b_119_2394" x="-53.8301" y="-53.7259" width="231.068" height="246.484"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="27"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_119_2394"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_119_2394" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_119_2394" x1="7.97993" y1="4.94262" x2="115.428" y2="134.09"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="1" stopColor="white" stopOpacity="0"/>
                    </linearGradient>
                </defs>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg"
                 width="225" height="396"
                 viewBox="0 0 225 396" fill="none" className="background__right-mask">
                <defs>
                    <clipPath id="blur_right_ellipse">
                        <ellipse cx="61.7037" cy="69.5162" rx="38.9991" ry="84"
                                 transform="rotate(-39.7597 61.7037 69.5162)"
                                 fill="white" fillOpacity="1"/>
                        <path
                            d="M91.2993 44.8934C106.099 62.6819 116.134 81.5535 120.408 97.6678C124.694 113.826 123.147 127.017 115.108 133.706C107.068 140.394 93.8165 139.516 78.7072 132.362C63.6392 125.228 46.9078 111.928 32.1082 94.1391C17.3085 76.3505 7.27381 57.479 2.99955 41.3647C-1.28644 25.2062 0.260076 12.0158 8.29972 5.32699C16.3394 -1.36181 29.591 -0.483157 44.7003 6.6706C59.7683 13.8048 76.4996 27.1049 91.2993 44.8934Z"
                            stroke="url(#paint0_linear_119_2394)"/>
                    </clipPath>
                </defs>
            </svg>

            <svg className="background__right-blur-ellipse" xmlns="http://www.w3.org/2000/svg" width="186" height="396"
                 viewBox="0 0 186 396" fill="none">
                <g filter="url(#filter0_f_119_2377)">
                    <ellipse cx="180" cy="198" rx="37" ry="62" transform="rotate(21.1324 180 198)"
                             fill="url(#paint0_linear_119_2377)"/>
                </g>
                <defs>
                    <filter id="filter0_f_119_2377" x="0.676956" y="0.43782" width="358.646" height="395.124"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="69.1" result="effect1_foregroundBlur_119_2377"/>
                    </filter>
                    <linearGradient id="paint0_linear_119_2377" x1="174.618" y1="144.267" x2="214.019" y2="148.812"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9A6BFF"/>
                        <stop offset="1" stopColor="#C8AEFF"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}

export default Background;