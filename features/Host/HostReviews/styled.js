import styled, { css } from "styled-components";

export const ReviewsContainer = styled.div``;

export const ReviewsContainerHeader = styled.header`
  display: flex;
  align-items: flex-end;
  gap: 15px;
  margin: 26px 0;
`;

export const ReviewsContainerHeading = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 32px;
`;

export const ReviewsContainerText = styled.p`
  margin: 0 0 5px;
  color: #4d4d4d;
  padding: 0;
  & > span {
    font-weight: 700;
    text-decoration: underline;
  }
`;

export const ReviewsDiagram = styled.article``;

export const DiagramHeader = styled.header`
  display: flex;
  align-items: flex-end;
  gap: 6px;
`;

export const DiagramHeading = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 32px;
`;

export const DiagramImage = styled.img`
  width: 26px;
  height: 24px;
  margin: 0 0 9px;
  padding: 0;
`;

export const DiagramText = styled.p`
  margin: 0 0 9px;
  padding: 0;
  font-weight: 600;
`;

export const DiagramContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  gap: 18px;
`;

export const DiagramBarContainer = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 60px;
  align-items: center;
  grid-column-gap: 15px;
  visibility: hidden;
  transform: translateY(-18px);
  &:nth-child(1) {
    animation: reviewsBarContainerAnimation 0.25s 0.25s forwards linear;
  }
  &:nth-child(2) {
    animation: reviewsBarContainerAnimation 0.25s 0.5s forwards linear;
  }
  &:nth-child(3) {
    animation: reviewsBarContainerAnimation 0.25s 0.75s forwards linear;
  }
  &:nth-child(4) {
    animation: reviewsBarContainerAnimation 0.25s 1s forwards linear;
  }
  &:nth-child(5) {
    animation: reviewsBarContainerAnimation 0.25s 1.25s forwards linear;
  }
`;

export const DiagramBar = styled.div`
  width: 100%;
  height: 0px;
  border: 4px solid #b9b9b9;
  border-radius: 20px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    width: ${({ percentage }) => percentage};
    animation: reviewsBarAnimation 0.5s 1.5s backwards;
    height: 0px;
    border: 4px solid #ff8c38;
    border-radius: 20px;
    display: ${({ percentage }) =>
      !percentage ? "none" : percentage === "0%" ? "none" : "block"};
    transition: width 1s;
  }
`;

export const DiagramBarHeading = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: #4d4d4d;
  margin: 0;
`;

export const DiagramBarPercentage = styled.p`
  text-align: right;
  color: #4d4d4d;
  margin: 0;
`;

export const ReviewsOpinionsContainer = styled.section`
  margin: 36px 0;
`;

export const ReviewsOpinionsContainerHeading = styled.h3`
  font-size: 18px;
  margin: 0;
`;

export const OpinionContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 18px;
  animation: showElement .1s 1.5s both;
`;

export const OpinionStarsContainer = styled.div`
  display: flex;
  margin-bottom: 6px;
`;

export const OpinionStar = styled.img`
  width: 23px;
  height: 21px;
  display: none;
  &:nth-child(1) {
    display: block;
  }
  &:nth-child(2) {
    ${({ opinionRate }) =>
      opinionRate >= 2 &&
      css`
        display: block;
      `}
  }
  &:nth-child(3) {
    ${({ opinionRate }) =>
      opinionRate >= 3 &&
      css`
        display: block;
      `}
  }
  &:nth-child(4) {
    ${({ opinionRate }) =>
      opinionRate >= 4 &&
      css`
        display: block;
      `}
  }
  &:nth-child(5) {
    ${({ opinionRate }) =>
      opinionRate >= 5 &&
      css`
        display: block;
      `}
  }
`;

export const OpinionUserInformationContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 6px;
`;

export const UserName = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
`;

export const PostDate = styled.p`
  margin: 0;
  color: #8c8c8c;
  font-weight: 600;
  font-size: 14px;
`;

export const OpinionElement = styled.p`
  margin: 0;
  font-weight: 500;
`;
