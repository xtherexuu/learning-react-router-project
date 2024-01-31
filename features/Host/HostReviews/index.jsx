import {
  ReviewsContainerHeading,
  ReviewsContainer,
  ReviewsContainerText,
  ReviewsContainerHeader,
  ReviewsDiagram,
  DiagramHeading,
  DiagramImage,
  DiagramText,
  DiagramContainer,
  DiagramHeader,
  DiagramBarHeading,
  DiagramBar,
  DiagramBarPercentage,
  DiagramBarContainer,
  OpinionContainer,
  ReviewsOpinionsContainer,
  ReviewsOpinionsContainerHeading,
  OpinionStarsContainer,
  OpinionUserInformationContainer,
  UserName,
  PostDate,
  OpinionElement,
  OpinionStar,
} from "./styled";

import starImageSrc from "../../../Utils/star.png";
import { chceckIfUserIsLogedIn, fetchData } from "../../../api";
import { Await, defer, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

export async function loader({ request }) {
  await chceckIfUserIsLogedIn(request);
  return defer({ reviews: fetchData("/api/rates") });
}

export default function HostReviews() {
  const loaderData = useLoaderData();

  const someP = 0.42341314;
  return (
    <ReviewsContainer>
      <ReviewsContainerHeader>
        <ReviewsContainerHeading>Your reviews</ReviewsContainerHeading>
        <ReviewsContainerText>
          last <span>30 days</span>
        </ReviewsContainerText>
      </ReviewsContainerHeader>

      <Suspense fallback={<h1>Loading...</h1>}>
        <Await resolve={loaderData.reviews}>
          {(data) => {
            const reviewsArr = data.rates;
            const reviewsAmount = reviewsArr.length;
            const percentages = {
              all: (
                reviewsArr.reduce((r, v) => r + v.rate, 0) / reviewsAmount
              ).toFixed(1),
              five: (
                (reviewsArr.filter((e) => e.rate === 5).length /
                  reviewsAmount) *
                100
              ).toFixed(0),
              four: (
                (reviewsArr.filter((e) => e.rate === 4).length /
                  reviewsAmount) *
                100
              ).toFixed(0),
              three: (
                (reviewsArr.filter((e) => e.rate === 3).length /
                  reviewsAmount) *
                100
              ).toFixed(0),
              two: (
                (reviewsArr.filter((e) => e.rate === 2).length /
                  reviewsAmount) *
                100
              ).toFixed(0),
              one: (
                (reviewsArr.filter((e) => e.rate === 1).length /
                  reviewsAmount) *
                100
              ).toFixed(0),
            };
            return (
              <>
                <ReviewsDiagram>
                  <DiagramHeader>
                    <DiagramHeading>{percentages.all}</DiagramHeading>
                    <DiagramImage src={starImageSrc} />
                    <DiagramText>overall rating</DiagramText>
                  </DiagramHeader>
                  <DiagramContainer>
                    <DiagramBarContainer>
                      <DiagramBarHeading>5 stars</DiagramBarHeading>
                      <DiagramBar percentage={`${percentages.five}%`} />
                      <DiagramBarPercentage>{`${percentages.five}%`}</DiagramBarPercentage>
                    </DiagramBarContainer>
                    <DiagramBarContainer>
                      <DiagramBarHeading>4 stars</DiagramBarHeading>
                      <DiagramBar percentage={`${percentages.four}%`} />
                      <DiagramBarPercentage>{`${percentages.four}%`}</DiagramBarPercentage>
                    </DiagramBarContainer>
                    <DiagramBarContainer>
                      <DiagramBarHeading>3 stars</DiagramBarHeading>
                      <DiagramBar percentage={`${percentages.three}%`} />
                      <DiagramBarPercentage>{`${percentages.three}%`}</DiagramBarPercentage>
                    </DiagramBarContainer>
                    <DiagramBarContainer>
                      <DiagramBarHeading>2 stars</DiagramBarHeading>
                      <DiagramBar percentage={`${percentages.two}%`} />
                      <DiagramBarPercentage>{`${percentages.two}%`}</DiagramBarPercentage>
                    </DiagramBarContainer>
                    <DiagramBarContainer>
                      <DiagramBarHeading>1 star</DiagramBarHeading>
                      <DiagramBar percentage={`${percentages.one}%`} />
                      <DiagramBarPercentage>{`${percentages.one}%`}</DiagramBarPercentage>
                    </DiagramBarContainer>
                  </DiagramContainer>
                </ReviewsDiagram>
                <ReviewsOpinionsContainer>
                  <ReviewsOpinionsContainerHeading>
                    Reviews {`(${reviewsAmount})`}
                  </ReviewsOpinionsContainerHeading>
                  {reviewsArr.map((e) => (
                    <OpinionContainer>
                      <OpinionStarsContainer>
                        <OpinionStar opinionRate={e.rate} src={starImageSrc} />
                        <OpinionStar opinionRate={e.rate} src={starImageSrc} />
                        <OpinionStar opinionRate={e.rate} src={starImageSrc} />
                        <OpinionStar opinionRate={e.rate} src={starImageSrc} />
                        <OpinionStar opinionRate={e.rate} src={starImageSrc} />
                      </OpinionStarsContainer>
                      <OpinionUserInformationContainer>
                        <UserName>{e.username}</UserName>
                        <PostDate>{"December 1, 2022"}</PostDate>
                      </OpinionUserInformationContainer>
                      <OpinionElement>{e.comment}</OpinionElement>
                    </OpinionContainer>
                  ))}
                </ReviewsOpinionsContainer>
              </>
            );
          }}
        </Await>
      </Suspense>
    </ReviewsContainer>
  );
}
