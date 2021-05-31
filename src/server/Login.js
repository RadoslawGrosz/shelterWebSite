import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import Firebase from './firebase';
import { AuthContext } from './Auth';
import LoginForm from '../admin/components/LoginForm';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await Firebase.auth().signInWithEmailAndPassword(
          email.value,
          password.value,
        );
        history.push('/');
      } catch (err) {
        alert(err);
      }
    },
    [history],
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/admin" />;
  }

  return <LoginForm handleLogin={handleLogin} />;
};

export default withRouter(Login);
