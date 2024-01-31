import {
  Wrapper,
  DahsboardIncomeDetailsLink,
  DahsboardReviewsRateContainer,
  DashboardContainer,
  DashboardIncomeContainer,
  DashboardIncomeHeading,
  DashboardIncomeSummary,
  DashboardIncomeText,
  DashboardReviewsContainer,
  DashboardReviewsDetailsLink,
  DashboardReviewsHeading,
  RateElement,
  RateImage,
  YourVansContainer,
  YourVansHeader,
  YourVansHeading,
  YourVansList,
  ViewAllVansButton,
  VanBlock,
  BlockImage,
  BlockName,
  BlockPrice,
} from "./styled";

import starImgSrc from "../../../Utils/star.png";
import { chceckIfUserIsLogedIn, fetchData } from "../../../api";
import { Await, defer, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

export async function loader({ request }) {
  await chceckIfUserIsLogedIn(request);
  return defer({
    van: fetchData("/api/host/vans"),
    rates: fetchData("/api/rates"),
  });
}

export default function HostDashboard() {
  const income = "2,260";
  const loaderData = useLoaderData();

  return (
    <Wrapper>
      <DashboardContainer>
        <DashboardIncomeContainer>
          <DashboardIncomeHeading>Welcome!</DashboardIncomeHeading>
          <DashboardIncomeText>
            Income last <span>30 days</span>
          </DashboardIncomeText>
          <DahsboardIncomeDetailsLink to="/host/income">
            Details
          </DahsboardIncomeDetailsLink>
          <DashboardIncomeSummary>${income}</DashboardIncomeSummary>
        </DashboardIncomeContainer>
        <DashboardReviewsContainer>
          <DashboardReviewsHeading>Review score</DashboardReviewsHeading>
          <Suspense fallback={<h2>Loading...</h2>}>
            <Await resolve={loaderData.rates}>
              {(rates) => {
                const rate = (
                  rates.rates.reduce((a, v) => a + v.rate, 0) /
                  rates.rates.length
                ).toFixed(1);
                return (
                  <DahsboardReviewsRateContainer>
                    <RateImage src={starImgSrc} />
                    <RateElement>
                      <span>{rate}</span>/5
                    </RateElement>
                  </DahsboardReviewsRateContainer>
                );
              }}
            </Await>
          </Suspense>
          <DashboardReviewsDetailsLink to="/host/reviews">Details</DashboardReviewsDetailsLink>
        </DashboardReviewsContainer>
      </DashboardContainer>
      <YourVansContainer>
        <YourVansHeader>
          <YourVansHeading>Your listed vans</YourVansHeading>
          <ViewAllVansButton to="/host/vans">View all</ViewAllVansButton>
        </YourVansHeader>
        <Suspense fallback={<h1>Loading vans...</h1>}>
          <YourVansList>
            <Await resolve={loaderData.van}>
              {(van) =>
                van.vans.map((van) => (
                  <VanBlock to={`/host/vans/${van.id}`} key={van.id}>
                    <BlockImage src={van.imageUrl} />
                    <BlockName>{van.name}</BlockName>
                    <BlockPrice>${van.price}/day</BlockPrice>
                  </VanBlock>
                ))
              }
            </Await>
          </YourVansList>
        </Suspense>
      </YourVansContainer>
    </Wrapper>
  );
}
