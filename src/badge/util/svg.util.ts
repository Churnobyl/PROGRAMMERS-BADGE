import { UserData } from '../../interface/programmers.interface';

/**
 * 뱃지(미니) SVG 문자열 생성 메소드
 * @description 프로그래머스에서 받아온 데이터를 이용하여 뱃지 SVG 문자열을 반환합니다.
 * @param userData
 * @returns {string}
 */
export const getSvgStr = (userData: UserData): string => {
  return `<?xml version="1.0" encoding="UTF-8"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="350px" height="170px" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" xmlns:xlink="http://www.w3.org/1999/xlink">
        <style>
            .title_no {
                font-size: 3rem;
                font-weight: 1000;
                font-family: 'Noto Sans KR', sans-serif;
            }

            .title_id {
                font-size: 1.3rem;
                font-weight: 1000;
                font-family: 'Noto Sans KR', sans-serif;
            }
        
            .sub_title {
                font-size: 1rem;
                font-weight: 700;
                font-family: 'Noto Sans KR', sans-serif;
            }

            .value {
                font-size: 1rem;
                font-weight: 500;
                font-family: 'Noto Sans KR', sans-serif;
            }

            .group {
                animation: delayFadeIn 2s ease-in-out forwards
            }

            @keyframes delayFadeIn {
                0% { opacity: 0; }
                80% { opacity: 0; }
                100% { opacity: 1; }
            }

        </style>
        
        <!-- 색상 배경 -->
        <defs>
            <linearGradient xmlns="http://www.w3.org/2000/svg" id="grad" x1="0%" y1="0%" x2="100%" y2="35%">
                <stop offset="10%" style="stop-color: #808080;stop-opacity:1">
                    <animate attributeName="stop-opacity" values="0.7; 0.73; 0.9 ; 0.97; 1; 0.97; 0.9; 0.73; 0.7;" dur="4s" repeatCount="indefinite" repeatDur="01:00"/>
                </stop>
                <stop offset="55%" style="stop-color: #4e4e4e;stop-opacity:1">
                    <animate attributeName="stop-opacity" values="1; 0.95; 0.93; 0.95; 1;" dur="4s" repeatCount="indefinite" repeatDur="01:00"/>
                </stop>
                <stop offset="100%" style="stop-color: #3c3c3c;stop-opacity:1">
                    <animate attributeName="stop-opacity" values="1; 0.97; 0.9; 0.83; 0.8; 0.83; 0.9; 0.97; 1;" dur="4s" repeatCount="indefinite" repeatDur="01:00"/>
                </stop>
            </linearGradient>
        </defs>
        <rect width="350" height="170" rx="10" ry="10" fill="url(#grad)"/>

        <line x1="34" y1="50" x2="34" y2="105" stroke-width="2" stroke="white">
            <animate attributeName="y2" dur="0.8s" fill="freeze" calcMode="spline" keyTimes="0 ; 0.675 ; 1" keySplines="0 0 1 1 ; 0.5 0 0.5 1" values="50 ; 50 ; 105"/>
        </line>

        <line x1="34" y1="105" x2="67" y2="125" stroke-width="2" stroke="white">
            <animate attributeName="x2" dur="1s" fill="freeze" calcMode="spline" keyTimes="0 ; 0.8 ; 1" keySplines="0 0 1 1 ; 0.5 0 0.5 1" values="34 ; 34 ; 67"/>
            <animate attributeName="y2" dur="1s" fill="freeze" calcMode="spline" keyTimes="0 ; 0.8 ; 1" keySplines="0 0 1 1 ; 0.5 0 0.5 1" values="105 ; 105 ; 125"/>
        </line>

        <line x1="67" y1="125" x2="100" y2="105" stroke-width="2" stroke="white">
            <animate attributeName="x2" dur="1.2s" fill="freeze" calcMode="spline" keyTimes="0 ; 0.83333 ; 1" keySplines="0 0 1 1 ; 0.5 0 0.5 1" values="67 ; 67 ; 100"/>
            <animate attributeName="y2" dur="1.2s" fill="freeze" calcMode="spline" keyTimes="0 ; 0.83333 ; 1" keySplines="0 0 1 1 ; 0.5 0 0.5 1" values="125 ; 125 ; 105"/>
        </line>

        <line x1="100" y1="105" x2="100" y2="50" stroke-width="2" stroke="white">
            <animate attributeName="y2" dur="1.5s" fill="freeze" calcMode="spline" keyTimes="0 ; 0.8 ; 1" keySplines="0 0 1 1 ; 0.5 0 0.5 1" values="105 ; 105 ; 50"/>
        </line>

        <line x1="67" y1="130" x2="34" y2="110" stroke-width="2" stroke="white">
            <animate attributeName="x2" dur="1.9s" fill="freeze" calcMode="spline" keyTimes="0 ; 0.78947; 1" keySplines="0 0 1 1 ; 0.5 0 0.5 1" values="67 ; 67 ; 34"/>
            <animate attributeName="y2" dur="1.9s" fill="freeze" calcMode="spline" keyTimes="0 ; 0.78947 ; 1" keySplines="0 0 1 1 ; 0.5 0 0.5 1" values="130 ; 130 ; 110"/>
        </line>

        <line x1="67" y1="130" x2="100" y2="110" stroke-width="2" stroke="white">
            <animate attributeName="x2" dur="1.9s" fill="freeze" calcMode="spline" keyTimes="0 ; 0.78947 ; 1" keySplines="0 0 1 1 ; 0.5 0 0.5 1" values="67 ; 67 ; 100"/>
            <animate attributeName="y2" dur="1.9s" fill="freeze" calcMode="spline" keyTimes="0 ; 0.78947 ; 1" keySplines="0 0 1 1 ; 0.5 0 0.5 1" values="130 ; 130 ; 110"/>
        </line>

        <g class="group">
            <text text-anchor="middle" dominant-baseline="middle" x="65" y="85" class="title_no" style="fill:#ffffff;">${userData.skillCheck.level}</text>
            <text text-anchor="start" x="150" y="60" class="title_id" style="fill:#ffffff;">${userData.name}</text>
        </g>

        <g class="group">
            <text text-anchor="start" x="150" y="100" class="sub_title" style="fill:#ffffff;">Score</text>
            <text text-anchor="start" x="240" y="100" class="value" style="fill:#ffffff;">${userData.ranking.score.toLocaleString()}</text>
        </g>

        <g class="group">
            <text text-anchor="start" x="150" y="120" class="sub_title" style="fill:#ffffff;">Solved</text>
            <text text-anchor="start" x="240" y="120" class="value" style="fill:#ffffff;">${userData.codingTest.solved.toLocaleString()}</text>
        </g>

        <g class="group">
            <text text-anchor="start" x="150" y="140" class="sub_title" style="fill:#ffffff;">Rank</text>
            <text text-anchor="start" x="240" y="140" class="value" style="fill:#ffffff;">${userData.ranking.rank.toLocaleString()}</text>
        </g>

        </svg>
        `;
};
