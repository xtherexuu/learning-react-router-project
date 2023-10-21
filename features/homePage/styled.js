import styled from "styled-components";
import sectionImageSrc from "../../Utils/background-home-page.png";
import { Link } from "react-router-dom";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),
    url(${sectionImageSrc}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding: 45px 23px;
  min-height: calc(100vh - 110px - 50px - 44.094px);
`;

export const SectionHeading = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 42px;
  color: white;
`;

export const SectionParagraph = styled.p`
  color: white;
  line-height: 24px;
`;

export const SectionButton = styled(Link)`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  background-color: #ff8c38;
  border: none;
  width: 100%;
  margin-top: 27px;
  padding-block: 0.75rem;
  color: white;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
  &:hover {
    transform: translate(1px, 1px);
  }
`;
