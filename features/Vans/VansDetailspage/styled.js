import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Wrapper = styled.article`
  padding: 27px;
  min-height: calc(100vh - 110px - 50px - 44.094px);
`;

export const GoBackButton = styled(Link)`
  color: #201f1d;
  font-weight: 500;
  line-height: 23px;
  margin-bottom: 27px;
  display: inline-block;
  &:hover {
    color: black;
    text-decoration: underline;
    font-weight: bold;
  }
`;

export const VanImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const VanCategory = styled.p`
  display: inline-block;
  margin-top: 57px;
  border-radius: 5px;
  color: #ffead0;
  padding: 5px 18px;
  font-weight: 500;
  line-height: 31.66px;
  ${({ category }) =>
    category === "simple" &&
    css`
      background-color: #e17654;
    `}
  ${({ category }) =>
    category === "luxury" &&
    css`
      background-color: #161616;
    `}
    ${({ category }) =>
    category === "rugged" &&
    css`
      background-color: #115e59;
    `}
`;

export const VanName = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 34px;
`;

export const VanPrice = styled.span`
  display: inline;
  & > h3 {
    display: inline;

    font-weight: 700;
    font-size: 24px;
  }
  & > p {
    display: inline;

    font-weight: 500;
    font-size: 20px;
  }
`;

export const VanDescription = styled.p`
  font-weight: 500;
`;

export const RentButton = styled.button`
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  background-color: #ff8c38;
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 5px;
`;
