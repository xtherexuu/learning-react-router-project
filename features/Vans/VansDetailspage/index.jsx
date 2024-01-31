import { Await, defer, useLoaderData, useLocation } from "react-router-dom";
import {
  GoBackButton,
  RentButton,
  VanCategory,
  VanDescription,
  VanImage,
  VanName,
  VanPrice,
  Wrapper,
} from "./styled";
import { fetchData } from "../../../api";
import { Suspense } from "react";

export function loader({ params }) {
  const id = params.id;
  return defer({ van: fetchData(`/api/vans/${id}`) });
}

export default function VansDetailspage() {
  const location = useLocation();
  const returnSearchParams = location.state?.search || "";
  const searchTypeParameter = location.state?.type || "all";

  const loaderData = useLoaderData();

  return (
    <Wrapper>
      <GoBackButton to={`..${returnSearchParams}`} relative="path">
        ⬅ Back to {searchTypeParameter} vans
      </GoBackButton>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Await resolve={loaderData.van}>
          {(van) => {
            return (
              <>
                <VanImage src={van.vans.imageUrl} />
                <VanCategory category={van.vans.type}>
                  {van.vans.type.slice(0, 1).toUpperCase() +
                    van.vans.type.slice(1)}
                </VanCategory>
                <VanName>{van.vans.name}</VanName>
                <VanPrice>
                  <h3>${van.vans.price}</h3>
                  <p>/day</p>
                </VanPrice>
                <VanDescription>
                  The Modest Explorer is a van designed to get you out of the
                  house and into nature. This beauty is equipped with solar
                  panels, a composting toilet, a water tank and kitchenette. The
                  idea is that you can pack up your home and escape for a
                  weekend or even longer!
                </VanDescription>
                <RentButton>Rent this van</RentButton>
              </>
            );
          }}
        </Await>
      </Suspense>
    </Wrapper>
  );
}
