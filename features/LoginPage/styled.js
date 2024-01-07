import styled, { css } from "styled-components";
import { Form } from "react-router-dom";

export const Wrapper = styled.section`
  min-height: calc(100vh - 110px - 50px - 44.094px);
  background-color: #fff7ed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Heading = styled.h1`
  margin-bottom: 45px;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  ${({ isMargin }) =>
    isMargin &&
    css`
      margin-bottom: 0;
    `}
`;

export const Message = styled.p`
  animation-name: loginMessageAnimation;
  animation-duration: 800ms;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 45px;
`;

export const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  @media (min-width: 720px) {
    width: 60%;
  }
  @media (min-width: 1080px) {
    width: 50%;
  }
`;

export const FormInput = styled.input`
  border: 1px #d1d5db solid;
  background-color: white;
  height: 42px;
  padding: 9px 0 9px 13px;
  color: black;
  &::placeholder {
    color: #4d4d4d;
  }
  &:nth-child(1) {
    -webkit-border-top-left-radius: 6px;
    -webkit-border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  &:nth-child(2) {
    -webkit-border-bottom-left-radius: 6px;
    -webkit-border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;

export const FormButton = styled.button`
  margin-top: 22px;
  background-color: #ff8c38;
  color: white;
  border: none;
  border-radius: 6px;
  height: 55px;
  cursor: pointer;
  font-weight: 700;
  &:disabled {
    background-color: gray;
  }
`;

export const CreateAccountContainer = styled.div`
  display: flex;
`;

export const CreateAccountText = styled.p`
  font-weight: 500;
`;

export const CreateAccountButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ff8c38;
  font-weight: 700;
  cursor: pointer;
`;
