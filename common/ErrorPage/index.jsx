import { Wrapper, Button, TextElement } from "./styled";

export default function ErrorPage() {
  return (
    <Wrapper>
      <TextElement>
        <span>Error 404</span>
        <br />
        <br />
        Sorry, we couldn't find site what you've been searching for. 😥
        <br />
        Try again later o go to our homepage using button below.
      </TextElement>
      <Button to="/">Wróć na stronę główną</Button>
    </Wrapper>
  );
}
