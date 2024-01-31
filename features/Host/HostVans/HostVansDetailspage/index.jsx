import {
  Await,
  Outlet,
  defer,
  useLoaderData,
  useParams,
} from "react-router-dom";
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
import { Fragment, Suspense, useEffect } from "react";
import { chceckIfUserIsLogedIn, fetchData } from "../../../../api";

export async function loader({ params, request }) {
  await chceckIfUserIsLogedIn(request);
  const id = params.id;
  return defer({ van: fetchData(`/api/host/vans/${id}`) });
}

export default function HostVansDetailspage() {
  // const { id } = useParams();
  // const [van, fetchStatus] = useFetchData(`/api/host/vans/${id}`);

  const loaderData = useLoaderData();

  return (
    <Wrapper>
      <StyledLink to="../vans" relative="route">
        ⬅ Back to all vans
      </StyledLink>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Await resolve={loaderData.van}>
          {(van) => {
            return (
              <>
                <VanBlock>
                  <Fragment key={van.vans.id}>
                    <BlockImage src={van.vans.imageUrl} />
                    <BlockDataContainer>
                      <BlockType vantype={van.vans.type}>
                        {van.vans.type.slice(0, 1).toUpperCase() + van.vans.type.slice(1)}
                      </BlockType>
                      <BlockName>{van.vans.name}</BlockName>
                      <BlockPriceContainer>
                        <PriceFirstPart>${van.vans.price}/</PriceFirstPart>
                        <PriceSecoundPart>day</PriceSecoundPart>
                      </BlockPriceContainer>
                    </BlockDataContainer>
                  </Fragment>

                  <BlockNav>
                    <StyledNavLink to="." end>
                      Details
                    </StyledNavLink>
                    <StyledNavLink to="./pricing">Pricing</StyledNavLink>
                    <StyledNavLink to="./photos">Photos</StyledNavLink>
                  </BlockNav>
                </VanBlock>
                <Outlet
                  context={[
                    {
                      name: van.vans.name,
                      description: van.vans.description,
                      type: van.vans.type,
                      price: van.vans.price,
                      imageUrl: van.vans.imageUrl,
                    },
                  ]}
                />
              </>
            );
          }}
        </Await>
      </Suspense>
    </Wrapper>
  );
}
