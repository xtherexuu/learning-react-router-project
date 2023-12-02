import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    min-height: calc(100vh - 110px - 94px);
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    flex-direction: column;
`;

export const TextElement = styled.p`
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    & > span {
        font-size: 40px;
    }
`;

export const Button = styled(Link)`
    padding: 12px;
    background-color: #161616;
    font-size: 18px;
    font-weight: 700;
    color: white;
    text-decoration: none;
    text-align: center;
    width: 100%;
    border-radius: 5px;
`;