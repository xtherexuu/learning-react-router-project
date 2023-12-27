import {
  Wrapper,
  CreateAccountText,
  CreateAccountButton,
  Form,
  FormButton,
  FormInput,
  Heading,
  CreateAccountContainer,
} from "./styled";

export default function LoginPage() {
  return (
    <Wrapper>
      <Heading>Sign in to your account</Heading>
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
