import { useLocation, useParams } from "react-router-dom";
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

export default function HostVanDetailPage() {
  const params = useParams();
  const [van, fetchStatus] = useFetchData(`/api/vans/${params.id}`);
  const location = useLocation();
  const returnSearchParams = location.state?.search || "";
  const searchTypeParameter = location.state?.type || "all";

  return (
    <Wrapper>
      <GoBackButton to={`..${returnSearchParams}`} relative="path">
        ⬅ Back to {searchTypeParameter} vans
      </GoBackButton>
      {fetchStatus === "pending" ? (
        <h1>Loading...</h1>
      ) : fetchStatus === "error" ? (
        <h1>Something wents wrong! 😥 Try again later.</h1>
      ) : fetchStatus === "resolved" ? (
        van ? (
          <>
            <VanImage src={van.vans.imageUrl} />
            <VanCategory category={van.vans.type}>
              {van.vans.type.slice(0, 1).toUpperCase() + van.vans.type.slice(1)}
            </VanCategory>
            <VanName>{van.vans.name}</VanName>
            <VanPrice>
              <h3>${van.vans.price}</h3>
              <p>/day</p>
            </VanPrice>
            <VanDescription>
              The Modest Explorer is a van designed to get you out of the house
              and into nature. This beauty is equipped with solar panels, a
              composting toilet, a water tank and kitchenette. The idea is that
              you can pack up your home and escape for a weekend or even longer!
            </VanDescription>
            <RentButton>Rent this van</RentButton>
          </>
        ) : (
          <h1>
            We couldn't find a van with this id! 😥 <br /> Check if the id is
            correct or try later.
          </h1>
        )
      ) : (
        <h1>Something wents wrong! 😥 Try again later.</h1>
      )}
    </Wrapper>
  );
}
