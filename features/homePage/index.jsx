import {
  Section,
  SectionButton,
  SectionHeading,
  SectionParagraph,
} from "./styled";

export default function HomePage() {
  return (
    <Section>
      <SectionHeading>
        You got the travel plans, we got the travel vans.
      </SectionHeading>
      <SectionParagraph>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </SectionParagraph>
      <SectionButton to="/vans">Find your van</SectionButton>
    </Section>
  );
}