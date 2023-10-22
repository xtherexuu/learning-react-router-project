import {
  Wrapper,
  SectionHeading,
  SectionImage,
  SectionParagraph,
  CtaSection,
  CtaSectionButton,
  CtaSectionHeading,
  TextSection,
} from "./styled";

import sectionImageSrc from "../../Utils/header-about-page.png";

export default () => {
  return (
    <Wrapper>
      <SectionImage src={sectionImageSrc} />
      <TextSection>
        <SectionHeading>
          Don’t squeeze in a sedan when you could relax in a van.
        </SectionHeading>
        <SectionParagraph>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) <br />{" "}
          <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </SectionParagraph>
      </TextSection>
      <CtaSection>
        <CtaSectionHeading>
          Your destination is waiting. Your van is ready.
        </CtaSectionHeading>
        <CtaSectionButton to="/vans">Explore our vans</CtaSectionButton>
      </CtaSection>
    </Wrapper>
  );
};
