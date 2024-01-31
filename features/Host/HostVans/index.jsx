// import useFetchData from "../../../useFetchData";
import { Suspense } from "react";
import { chceckIfUserIsLogedIn, fetchData } from "../../../api";

import {
  Wrapper,
  BlockImage,
  BlockName,
  BlockPrice,
  SectionHeading,
  VanBlock,
} from "./styled";
import { Await, defer, useLoaderData } from "react-router-dom";

export async function loader({ request }) {
  await chceckIfUserIsLogedIn(request);
  return defer({ vans: fetchData("/api/host/vans") });
}

export default function HostVans() {
  // const [vans, fetchStatus] = useFetchData("/api/host/vans");
  const loaderData = useLoaderData();

  return (
    <Wrapper>
      <SectionHeading>Your listed vans</SectionHeading>
      {/* {fetchStatus === "pending" ? (
        <h1>Loading...</h1>
      ) : fetchStatus === "error" ? (
        <h1>Something wents wrong! 😥 Refresh the site or try again later.</h1>
      ) : fetchStatus === "resolved" ? (
        vans.vans.map((van) => (
          <VanBlock to={van.id} key={van.id}>
            <BlockImage src={van.imageUrl} />
            <BlockName>{van.name}</BlockName>
            <BlockPrice>${van.price}/day</BlockPrice>
          </VanBlock>
        ))
      ) : (
        <h1>Something wents wrong! 😥 Refresh the site or try again later.</h1>
      )} */}
      <Suspense fallback={<h1>Loading...</h1>}>
        <Await resolve={loaderData.vans}>
          {(vans) =>
            vans.vans.map((van) => (
              <VanBlock to={van.id} key={van.id}>
                <BlockImage src={van.imageUrl} />
                <BlockName>{van.name}</BlockName>
                <BlockPrice>${van.price}/day</BlockPrice>
              </VanBlock>
            ))
          }
        </Await>
      </Suspense>
    </Wrapper>
  );
}
