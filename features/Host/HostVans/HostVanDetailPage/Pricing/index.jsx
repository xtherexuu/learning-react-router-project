import { useOutletContext } from "react-router-dom";
import {
  Wrapper,
  PriceContainer,
  PriceElement,
  AdditionalElement,
} from "./styled";

export default function HostVanDetailPagePhotos() {
  const [dataObj] = useOutletContext();

  return (
    <Wrapper>
      <PriceContainer>
        <PriceElement>${dataObj.price.toFixed(2)}</PriceElement>
        <AdditionalElement>/day</AdditionalElement>
      </PriceContainer>
    </Wrapper>
  );
}
