import { redirect, useLoaderData, useActionData, useNavigation } from "react-router-dom";
import {
  Wrapper,
  CreateAccountText,
  CreateAccountButton,
  StyledForm,
  FormButton,
  FormInput,
  Heading,
  CreateAccountContainer,
  Message,
} from "./styled";
import { loginUser } from "../../api";

export function loader({ request }) {
  return new URL(request.url).searchParams?.get("message") || null;
}

export async function action({ request }) {
  const formDataObj = await request.formData();
  console.log(new URLSearchParams(new URL(request.url).searchParams).get("message"))
  const email = formDataObj.get("email");
  const password = formDataObj.get("password");
  const formData = { email, password };
  try {
    const data = await loginUser(formData);
    localStorage.setItem("loggedin", JSON.stringify(true));
    const response = redirect("/host", { replace: true});
    response.body = true;
    return response;
  } catch (error) {
    console.error(error)
    console.error(error.message)
    return error.message;
  }
}

export default function LoginPage() {
  const message = useLoaderData();
  const error = useActionData();
  const navigation = useNavigation();
  const status = navigation.state;

  return (
    <Wrapper>
      <Heading isMargin={message || error ? true : false}>
        Sign in to your account
      </Heading>
      {!error && message && <Message>{message}</Message>}
      {error && <Message>{error}</Message>}
      <StyledForm replace method="post">
        <FormInput
          type="email"
          name="email"
          placeholder="Email address"
          pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
          required
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$"
          title="The password must be at least 8 characters long, include at least one uppercase letter, one digit, and one special character."
          required
        />
        <FormButton disabled={status === "submitting"}>
          {status === "submitting" ? "Logging in..." : "Log in"}
        </FormButton>
      </StyledForm>
      <CreateAccountContainer>
        <CreateAccountText>Don't have an account?</CreateAccountText>
        <CreateAccountButton>Create one now</CreateAccountButton>
      </CreateAccountContainer>
    </Wrapper>
  );
}
