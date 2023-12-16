import { Wrapper, Button, TextElement } from "./styled";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  console.error("Error code: " + error.status + " || Error status: " + error.statusText)

  return (
    <Wrapper>
      <TextElement>
        <span>Error</span>
        <br />
        <br />
        Sorry, {error.message} 😥
        <br />
        Try again later o go to our homepage using button below.
      </TextElement>
      <Button to="/">Go back to the homepage</Button>
    </Wrapper>
  );
}
