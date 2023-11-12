import { useOutletContext } from "react-router-dom";
import { Wrapper, PhotoElement } from "./styled";

export default function HostVanDetailPagePricing() {
  const [dataObj] = useOutletContext();

  return (
    <Wrapper>
      <PhotoElement src={dataObj.imageUrl} />
    </Wrapper>
  );
}
