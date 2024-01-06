import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @keyframes loginMessageAnimation {
        0% {
            color: rgb(255, 100, 100);
            transform: translateX(0px);
        }
        20% {
            color: red;
        }
        40% {
            color: rgb(199, 0, 0);
        }
        80% {
            color: rgb(255, 100, 100);
        }
        100% {
            color: red;
            transform: translateX(0px);
        }  
        10%, 30%, 50%, 70%, 90% {
            transform: translateX(-5px);
        }
        20%, 40%, 60%, 80% {
            transform: translateX(5px);
        }
    }
`;

export default GlobalStyles;
