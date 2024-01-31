import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 26px;
`;

export const DashboardContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const DashboardIncomeContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-auto-rows: auto;
  align-items: center;
  background-color: #ffead0;
  padding: 26px;
  grid-row-gap: 32px;
`;

export const DashboardIncomeHeading = styled.h2`
  grid-column: 1 / -1;
  font-weight: 700;
  font-size: 36px;
  padding: 0;
  margin: 0;
`;

export const DashboardIncomeText = styled.p`
  font-size: 16px;
  font-weight: 500px;
  color: #4d4d4d;
  & > span {
    font-weight: 700;
    text-decoration: underline;
  }
`;

export const DahsboardIncomeDetailsLink = styled(Link)`
  color: black;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
`;

export const DashboardIncomeSummary = styled.h3`
  grid-column: 1 / -1;
  margin: 0;
  padding: 0;
  font-size: 48px;
  font-weight: 800;
`;

export const DashboardReviewsContainer = styled.article`
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-gap: 12px;
  align-items: center;
  background-color: #ffddb2;
  padding: 26px;
`;

export const DashboardReviewsHeading = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

export const DahsboardReviewsRateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const RateImage = styled.img`
  width: 26px;
  height: 24px;
`;

export const RateElement = styled.p`
  color: #4d4d4d;
  font-size: 20px;
  font-weight: 500;
  & > span {
    color: black;
    font-weight: 700;
  }
`;

export const DashboardReviewsDetailsLink = styled(Link)`
  justify-self: end;
  color: black;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
`;

export const YourVansContainer = styled.section`
  padding: 26px;
  display: flex;
  flex-direction: column;
`;

export const YourVansHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 0;
`;

export const YourVansHeading = styled.h2`
  padding: 0;
  margin: 0;
`;

export const ViewAllVansButton = styled(Link)`
  color: black;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
`;

export const YourVansList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const VanBlock = styled(Link)`
  color: black;
  text-decoration: none;
  max-height: 105px;
  background-color: white;
  border-radius: 6px;
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
