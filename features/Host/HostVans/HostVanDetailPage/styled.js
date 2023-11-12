import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin-top: 45px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #201f1d;
  margin-bottom: 37px;
  display: block;
  &:hover {
    text-decoration: underline;
    color: black;
    font-weight: bold;
  }
`;

export const VanBlock = styled.div`
  background-color: white;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 26px;
  padding: 26px;
  grid-template-areas:
    "image data"
    "nav nav";
`;

export const BlockDataContainer = styled.div`
  grid-area: data;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

export const BlockImage = styled.img`
  grid-area: image;
  max-width: 160px;
  border-radius: 6px;
`;

export const BlockName = styled.h3`
  margin: 0;
  font-weight: 700;
  font-size: 26px;
`;

export const BlockType = styled.p`
  margin: 0;
  background-color: #e17654;
  display: inline;
  align-self: start;
  border-radius: 4px;
  padding: 8px;
  color: #ffead0;
  font-size: 13px;
  font-weight: 600;
  ${({ vantype }) =>
    vantype === "simple" &&
    css`
      background-color: #e17654;
    `}
  ${({ vantype }) =>
    vantype === "luxury" &&
    css`
      background-color: #161616;
    `}
    ${({ vantype }) =>
    vantype === "rugged" &&
    css`
      background-color: #115e59;
    `}
`;

export const BlockPriceContainer = styled.span`
  display: flex;
  align-items: end;
`;

export const PriceFirstPart = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: black;
  margin: 0;
  align-self: bottom;
`;

export const PriceSecoundPart = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`;

export const BlockNav = styled.nav`
  grid-area: nav;
  display: flex;
  gap: 26px;
`;

export const StyledNavLink = styled(NavLink)`
  color: #4d4d4d;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    color: black;
    font-weight: 700;
    text-decoration: underline;
  }
  &.active {
    color: black;
    font-weight: 700;
    text-decoration: underline;
  }
`;
