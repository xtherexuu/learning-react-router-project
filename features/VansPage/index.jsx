import useVans from "../../useVans";
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
  VanElementPrizeContainer,
  VansContainer,
  Wrapper,
} from "./styled";

export default function VansPage() {
  const [isFetched, vans] = useVans();
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
        {isFetched
          ? vans.map((van) => (
              <VanElement key={van.id}>
                <VanElementImage src={van.imageUrl} />
                <VanElementHeading>{van.name}</VanElementHeading>
                <VanElementCategory
                  category={
                    van.type.slice(0, 1).toUpperCase() + van.type.slice(1)
                  }
                >
                  {van.type.slice(0, 1).toUpperCase() + van.type.slice(1)}
                </VanElementCategory>
                <VanElementPrizeContainer>
                  <h4>${van.price}</h4>
                  <p>/day</p>
                </VanElementPrizeContainer>
              </VanElement>
            ))
          : null}
      </VansContainer>
    </Wrapper>
  );
}
