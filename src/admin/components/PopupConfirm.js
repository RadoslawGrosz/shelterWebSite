import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  WrapperHover,
  Alert,
  StyledH2,
  StyledP,
  StyledButton,
} from '../styles/StyledPopupConfirm';

const PopupConfirm = ({ hideAlert, removeArticle, count }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleConfirm = () => {
    setIsDeleting(true);
    removeArticle();
  };

  const message = () => {
    if (count) {
      return <>Usunięte zostaną {count} psy z bazy danych!</>;
    }
    setTimeout(() => {
      window.location.reload();
    }, 3000);
    return <>Usunięto, strona zostanie odświeżona...</>;
  };

  return (
    <WrapperHover onClick={hideAlert}>
      <Alert>
        <StyledH2>Czy na pewno chcesz usunąć?</StyledH2>
        <StyledP>{message()}</StyledP>
        {count && isDeleting && <StyledP>Usuwam...</StyledP>}
        <StyledButton onClick={handleConfirm} confirm>
          Tak
        </StyledButton>
        <StyledButton onClick={hideAlert}>Nie</StyledButton>
      </Alert>
    </WrapperHover>
  );
};

PopupConfirm.propTypes = {
  hideAlert: PropTypes.func,
  removeArticle: PropTypes.func,
  count: PropTypes.number,
};

PopupConfirm.defaultProps = {
  hideAlert: () => {},
  removeArticle: () => {},
  count: 0,
};

export default PopupConfirm;
