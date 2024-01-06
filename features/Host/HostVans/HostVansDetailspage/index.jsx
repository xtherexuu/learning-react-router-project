import { Outlet, useLoaderData, useParams } from "react-router-dom";
// import useFetchData from "../../../../useFetchData";
import {
  Wrapper,
  BlockImage,
  BlockName,
  BlockNav,
  BlockPriceContainer,
  BlockType,
  PriceFirstPart,
  PriceSecoundPart,
  StyledLink,
  StyledNavLink,
  VanBlock,
  BlockDataContainer,
} from "./styled";
import { Fragment, useEffect } from "react";
import { chceckIfUserIsLogedIn, fetchData } from "../../../../api";

export async function loader({ params }) {
  await chceckIfUserIsLogedIn();
  const id = params.id;
  return fetchData(`/api/host/vans/${id}`);
}

export default function HostVansDetailspage() {
  // const { id } = useParams();
  // const [van, fetchStatus] = useFetchData(`/api/host/vans/${id}`);

  const van = useLoaderData();

  return (
    <Wrapper>
      <StyledLink to="../vans" relative="route">
        ⬅ Back to all vans
      </StyledLink>
      <VanBlock>
        {/* {fetchStatus === "pending" ? (
          <h1>Loading...</h1>
        ) : fetchStatus === "error" ? (
          <h1>
            Something wents wrong! 😥 Refresh the site or try again later.
          </h1>
        ) : fetchStatus === "resolved" ? (
          van.vans.length > 0 ? (
            van.vans.map((van) => (
              <Fragment key={van.id}>
                <BlockImage src={van.imageUrl} />
                <BlockDataContainer>
                  <BlockType vantype={van.type}>
                    {van.type.slice(0, 1).toUpperCase() + van.type.slice(1)}
                  </BlockType>
                  <BlockName>{van.name}</BlockName>
                  <BlockPriceContainer>
                    <PriceFirstPart>${van.price}/</PriceFirstPart>
                    <PriceSecoundPart>day</PriceSecoundPart>
                  </BlockPriceContainer>
                </BlockDataContainer>
              </Fragment>
            ))
          ) : (
            <h1>
              We can't find van with this id! Check the id or try again later.
            </h1>
          )
        ) : (
          <h1>
            Something wents wrong! 😥 Refresh the site or try again later.
          </h1>
        )} */}

        {van.vans.map((van) => (
          <Fragment key={van.id}>
            <BlockImage src={van.imageUrl} />
            <BlockDataContainer>
              <BlockType vantype={van.type}>
                {van.type.slice(0, 1).toUpperCase() + van.type.slice(1)}
              </BlockType>
              <BlockName>{van.name}</BlockName>
              <BlockPriceContainer>
                <PriceFirstPart>${van.price}/</PriceFirstPart>
                <PriceSecoundPart>day</PriceSecoundPart>
              </BlockPriceContainer>
            </BlockDataContainer>
          </Fragment>
        ))}

        <BlockNav>
          <StyledNavLink to="." end>
            Details
          </StyledNavLink>
          <StyledNavLink to="./pricing">Pricing</StyledNavLink>
          <StyledNavLink to="./photos">Photos</StyledNavLink>
        </BlockNav>
      </VanBlock>

      {/* {fetchStatus === "pending" ? null : fetchStatus ===
        "error" ? null : fetchStatus === "resolved" ? (
        van.vans.length > 0 ? (
          <Outlet
            context={[
              {
                name: van.vans[0].name,
                description: van.vans[0].description,
                type: van.vans[0].type,
                price: van.vans[0].price,
                imageUrl: van.vans[0].imageUrl,
              },
            ]}
          />
        ) : null
      ) : null} */}

      <Outlet
        context={[
          {
            name: van.vans[0].name,
            description: van.vans[0].description,
            type: van.vans[0].type,
            price: van.vans[0].price,
            imageUrl: van.vans[0].imageUrl,
          },
        ]}
      />
    </Wrapper>
  );
}
