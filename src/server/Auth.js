import React, { useEffect, useState } from 'react';
import Firebase from './firebase';
import { SpinnerContainer, Spinner } from '../home/styles/StyledMainSection';
import { WrapperHover } from '../admin/styles/StyledPopupConfirm';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  // if (pending) {
  //   return (
  //     <WrapperHover bgc="#000">
  //       <SpinnerContainer>
  //         <Spinner />
  //       </SpinnerContainer>
  //     </WrapperHover>
  //   );
  // }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
