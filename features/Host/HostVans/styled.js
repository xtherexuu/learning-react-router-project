import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const SectionHeading = styled.h2``;

export const VanBlock = styled(Link)`
  color: black;
  text-decoration: none;
  max-height: 105px;
  background-color: white;
  border-radius: 6px;
  margin-bottom: 15px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    "image name"
    "image price";
  padding: 15px;
`;

export const BlockImage = styled.img`
  max-width: 66px;
  grid-area: image;
  border-radius: 6px;
  margin-right: 15px;
`;

export const BlockName = styled.h3`
  grid-area: name;
  margin: 0;
  line-height: 31.66px;
  font-size: 20px;
  font-weight: bold;
  align-self: end;
`;

export const BlockPrice = styled.p`
  grid-area: price;
  margin: 0;
  line-height: 31.66px;
  font-size: 16px;
  font-weight: 500;
  align-self: top;
  color: #4d4d4d;
`;
