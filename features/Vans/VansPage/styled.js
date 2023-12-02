import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
  min-height: calc(100vh - 110px - 50px - 44.094px);
  padding: 0 27px;
`;

export const SectionHeading = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin: 27px 0;
`;

export const Filters = styled.ul`
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0;
  list-style: none inside;
  display: flex;
  justify-content: space-between;
  gap: 27px;
  margin-bottom: 27px;
`;

export const FilterElement = styled.button`
  font-weight: 500;
  line-height: 23.92px;
  background-color: #ffead0;
  border-radius: 5px;
  padding: 6px 26px;
  color: #4d4d4d;
  text-decoration: none;
  border: none;
  &:hover {
    color: black;
    text-decoration: underline;
    cursor: pointer;
  }
  ${({ isactive }) =>
    isactive === "simple"
      ? css`
          background-color: #e17654;
          color: #ffead0 !important;
        `
      : isactive === "luxury"
      ? css`
          background-color: #161616;
          color: #ffead0 !important;
        `
      : isactive === "rugged"
      ? css`
          background-color: #115e59;
          color: #ffead0 !important;
        `
      : null}
`;

export const ClearFilterButton = styled(FilterElement)`
  display: flex;
  align-items: center;
  background-color: transparent;
`;

export const VansContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 27px;
  justify-content: space-around;
  margin-bottom: 27px;
`;

export const VanElement = styled(Link)`
  color: black;
  text-decoration: none;
  display: grid;
  grid-template-columns: 1fr auto;
  justify-items: left;
  grid-template-areas:
    "image image"
    "image image"
    "title  price"
    "category  price";
  cursor: pointer;
`;

export const VanElementHeading = styled.h3`
  font-weight: 600;
  font-size: 20px;
  grid-area: title;
  margin: 10px 0;
`;

export const VanElementImage = styled.img`
  width: 250px;
  grid-area: image;
  border-radius: 5px;
  margin-bottom: 13px;
`;

export const VanElementPriceContainer = styled.span`
  display: flex;
  flex-direction: column;
  grid-area: price;
  & > h4 {
    font-weight: 600;
    font-size: 20px;
    margin: 0;
    text-align: right;
    line-height: 31.66px;
  }
  & > p {
    font-weight: 500;
    font-size: 14px;
    margin: 0;
    text-align: right;
  }
`;

export const VanElementCategory = styled.p`
  grid-area: category;
  color: #ffead0;
  border-radius: 5px;
  padding: 7.5px 13px;
  margin: 0;
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
