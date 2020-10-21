import React from 'react';
import gsap from 'gsap';
import { Wrapper, FormWrapper, StyledH1, StyledForm, StyledInput, StyledButton, ButtonWrapper } from './styles/StyledLoginForm';

const LoginForm = ({ handleLogin }) => {
  return (
    <Wrapper>
      <FormWrapper>
        <StyledH1>Zaloguj się</StyledH1>
        <StyledForm onSubmit={handleLogin}>
          <StyledInput name="email" type="email" placeholder="Email" />
          <StyledInput name="password" type="password" placeholder="Hasło" />
          <StyledButton name="submit" value="Zaloguj" type="submit" />
        </StyledForm>
      </FormWrapper>
    </Wrapper>
  );
};

export default LoginForm;
