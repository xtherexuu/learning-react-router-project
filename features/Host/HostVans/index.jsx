// import useFetchData from "../../../useFetchData";
import { chceckIfUserIsLogedIn, fetchData } from "../../../api";

import {
  Wrapper,
  BlockImage,
  BlockName,
  BlockPrice,
  SectionHeading,
  VanBlock,
} from "./styled";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  await chceckIfUserIsLogedIn();
  return fetchData("/api/host/vans");
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
      {loaderData.vans.map((van) => (
        <VanBlock to={van.id} key={van.id}>
          <BlockImage src={van.imageUrl} />
          <BlockName>{van.name}</BlockName>
          <BlockPrice>${van.price}/day</BlockPrice>
        </VanBlock>
      ))}
    </Wrapper>
  );
}
