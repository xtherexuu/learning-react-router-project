import { useLoaderData, useSearchParams, Await, defer } from "react-router-dom";
import { fetchData } from "../../../api";
import {
  ClearFilterButton,
  FilterElement,
  Filters,
  SectionHeading,
  VanElement,
  VanElementCategory,
  VanElementHeading,
  VanElementImage,
  VanElementPriceContainer,
  VansContainer,
  Wrapper,
} from "./styled";
import React from "react";

const wait = (t, v) => {
  return new Promise((resolve) => setTimeout(resolve, t, v));
};

export function loader() {
  const data = fetchData("/api/vans");
  return defer({ data: data });
}

export default function VansPage() {
  const loaderData = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  return (
    <Wrapper>
      <SectionHeading>Explore our van options</SectionHeading>
      <Filters>
        <FilterElement
          isactive={typeFilter === "simple" ? "simple" : false}
          onClick={() => setSearchParams({ type: "simple" })}
        >
          Simple
        </FilterElement>
        <FilterElement
          isactive={typeFilter === "luxury" ? "luxury" : false}
          onClick={() => setSearchParams({ type: "luxury" })}
        >
          Luxury
        </FilterElement>
        <FilterElement
          isactive={typeFilter === "rugged" ? "rugged" : false}
          onClick={() => setSearchParams({ type: "rugged" })}
        >
          Rugged
        </FilterElement>
        {typeFilter ? (
          <ClearFilterButton onClick={() => setSearchParams({})}>
            Clear filters
          </ClearFilterButton>
        ) : null}
      </Filters>
      <VansContainer>
        <React.Suspense fallback={<h1>LOADING...</h1>}>
          <Await resolve={loaderData.data}>
            {(data) =>
              data.vans
                .filter((van) =>
                  typeFilter ? (van.type === typeFilter ? true : false) : true
                )
                .map((van) => (
                  <VanElement
                    to={van.id}
                    state={{
                      search: `?${searchParams.toString()}`,
                      type: typeFilter,
                    }}
                    key={van.id}
                  >
                    <VanElementImage src={van.imageUrl} />
                    <VanElementHeading>{van.name}</VanElementHeading>
                    <VanElementCategory category={van.type}>
                      {van.type.slice(0, 1).toUpperCase() + van.type.slice(1)}
                    </VanElementCategory>
                    <VanElementPriceContainer>
                      <h4>${van.price}</h4>
                      <p>/day</p>
                    </VanElementPriceContainer>
                  </VanElement>
                ))
            }
          </Await>
        </React.Suspense>
      </VansContainer>
    </Wrapper>
  );
}
