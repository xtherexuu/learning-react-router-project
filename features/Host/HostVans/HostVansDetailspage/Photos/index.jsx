import { useOutletContext } from "react-router-dom";
import { Wrapper, PhotoElement } from "./styled";

export default function HostVansDetailspagePricing() {
  const [dataObj] = useOutletContext();

  return (
    <Wrapper>
      <PhotoElement src={dataObj.imageUrl} />
    </Wrapper>
  );
}
