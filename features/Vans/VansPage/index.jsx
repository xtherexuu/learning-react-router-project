import { useSearchParams } from "react-router-dom";
import useFetchData from "../../../useFetchData";
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

export default function VansPage() {
  const [data, fetchStatus] = useFetchData("/api/vans");
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
        {fetchStatus === "pending" ? (
          <h1>Loading...</h1>
        ) : fetchStatus === "error" ? (
          <h1>Something wents wrong! 😥 Try again later.</h1>
        ) : fetchStatus === "resolved" ? (
          data.vans
            .filter((van) => (typeFilter ? van.type === typeFilter : true))
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
        ) : (
          <h1>Something wents wrong! 😥 Try again later.</h1>
        )}
      </VansContainer>
    </Wrapper>
  );
}
