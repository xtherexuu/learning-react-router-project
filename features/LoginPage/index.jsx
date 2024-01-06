import { useLoaderData } from "react-router-dom";
import {
  Wrapper,
  CreateAccountText,
  CreateAccountButton,
  Form,
  FormButton,
  FormInput,
  Heading,
  CreateAccountContainer,
  Message,
} from "./styled";

export function loader({ request }) {
  return new URL(request.url).searchParams?.get("message") || null;
}

export default function LoginPage() {
  const message = useLoaderData();
  return (
    <Wrapper>
      <Heading>Sign in to your account</Heading>
      {message && <Message>{message}</Message>}
      <Form>
        <FormInput
          type="text"
          placeholder="Email address"
          pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
          required
        />
        <FormInput
          type="password"
          placeholder="Password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$"
          title="The password must be at least 8 characters long, include at least one uppercase letter, one digit, and one special character."
          required
        />
        <FormButton>Sign in</FormButton>
      </Form>
      <CreateAccountContainer>
        <CreateAccountText>Don't have an account?</CreateAccountText>
        <CreateAccountButton>Create one now</CreateAccountButton>
      </CreateAccountContainer>
    </Wrapper>
  );
}
