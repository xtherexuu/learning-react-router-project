import { useOutletContext, useParams } from "react-router-dom";
import useFetchData from "../../../../../useFetchData";
import {
  InformationElement,
  Wrapper,
  InformationContent,
  InformationHeading,
} from "./styled";

export default function HostVansDetailspageDashboard() {
  const [dataObj] = useOutletContext();

  return (
    <Wrapper>
      <InformationElement>
        <InformationHeading>Name: </InformationHeading>
        <InformationContent>{dataObj.name}</InformationContent>
      </InformationElement>
      <InformationElement>
        <InformationHeading>Category: </InformationHeading>
        <InformationContent>{dataObj.type}</InformationContent>
      </InformationElement>
      <InformationElement>
        <InformationHeading>Description: </InformationHeading>
        <InformationContent>{dataObj.description}</InformationContent>
      </InformationElement>
      <InformationElement>
        <InformationHeading>Visibility: </InformationHeading>
        <InformationContent>Public</InformationContent>
      </InformationElement>
    </Wrapper>
  );
}
