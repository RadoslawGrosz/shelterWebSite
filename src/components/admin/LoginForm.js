import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  FormWrapper,
  StyledH1,
  StyledForm,
  StyledInput,
  StyledButton,
} from './styles/StyledLoginForm';

const LoginForm = ({ handleLogin }) => (
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

LoginForm.propTypes = {
  handleLogin: PropTypes.func,
};

LoginForm.defaultProps = {
  handleLogin: () => {},
};

export default LoginForm;
