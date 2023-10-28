import { useParams } from "react-router-dom";
import useFetchData from "../../../useFetchData";
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

export default function VanDetailPage() {
  const params = useParams();
  const [van, isFetched] = useFetchData(`/api/vans/${params.id}`);

  return (
    <Wrapper>
      <GoBackButton to="/vans">⬅ Back to all vans</GoBackButton>
      {isFetched ? (
        van ? (
          van.vans ? (
            <>
              <VanImage src={van.vans.imageUrl} />
              <VanCategory
                category={
                  van.vans.type.slice(0, 1).toUpperCase() +
                  van.vans.type.slice(1)
                }
              >
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
                idea is that you can pack up your home and escape for a weekend
                or even longer!
              </VanDescription>
              <RentButton>Rent this van</RentButton>
            </>
          ) : null
        ) : (
          <h1>
            We couldn't find a van with this id! 😥 <br /> Check if the id is
            correct or try later.
          </h1>
        )
      ) : null}
    </Wrapper>
  );
}
