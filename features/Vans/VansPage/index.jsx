import useFetchData from "../../../useFetchData";
import {
  ClearFilterButton,
  FilterElement,
  Filters,
  SectionFilters,
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
  return (
    <Wrapper>
      <SectionHeading>Explore our van options</SectionHeading>
      <SectionFilters>
        <Filters>
          <FilterElement>Simple</FilterElement>
          <FilterElement>Luxury</FilterElement>
          <FilterElement>Rugged</FilterElement>
        </Filters>
        <ClearFilterButton>Clear filters</ClearFilterButton>
      </SectionFilters>
      <VansContainer>
        {fetchStatus === "pending" ? (
          <h1>Loading...</h1>
        ) : fetchStatus === "error" ? (
          <h1>Something wents wrong! 😥 Try again later.</h1>
        ) : fetchStatus === "resolved" ? (
          data.vans.map((van) => (
            <VanElement to={`/vans/${van.id}`} key={van.id}>
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
