import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 26px 26px;
`;

export const InformationElement = styled.span`
  line-height: 21.5px;
`;

export const InformationHeading = styled.h2`
  margin: 0;
  font-size: 14px;
  display: inline;
  font-weight: 700;
`;

export const InformationContent = styled.p`
  margin: 0;
  font-size: 14px;
  display: inline;
  font-weight: 500;
`;
