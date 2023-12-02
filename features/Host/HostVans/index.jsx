import useFetchData from "../../../useFetchData";

import {
  Wrapper,
  BlockImage,
  BlockName,
  BlockPrice,
  SectionHeading,
  VanBlock,
} from "./styled";

export default function HostVans() {
  const [vans, fetchStatus] = useFetchData("/api/host/vans");

  return (
    <Wrapper>
      <SectionHeading>Your listed vans</SectionHeading>
      {fetchStatus === "pending" ? (
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
      )}
    </Wrapper>
  );
}
