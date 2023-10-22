import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
  min-height: calc(100vh - 110px - 50px - 44.094px);
  background-color: #fff7ed;
`;

export const SectionImage = styled.img`
  max-width: 100%;
`;

export const TextSection = styled.div`
  padding-inline: 23px;
  color: #161616;
  margin-bottom: 55px;
`;

export const SectionHeading = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
`;

export const SectionParagraph = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
`;

export const CtaSection = styled.div`
  background-color: #ffcc8d;
  color: #161616;
  padding-inline: 32px;
  padding-bottom: 32px;
  margin-inline: 27px;
  border-radius: 5px;
`;

export const CtaSectionHeading = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  padding-block: 37px;
`;

export const CtaSectionButton = styled(Link)`
  font-size: 16px;
  font-weight: 700;
  color: white;
  border: none;
  border-radius: 10px;
  background-color: black;
  padding: 12px;
  text-decoration: none;
`;
