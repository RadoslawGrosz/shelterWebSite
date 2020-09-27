import React from 'react';
import PropTypes from 'prop-types';
import {
  WrapperHover,
  Alert,
  StyledH2,
  StyledP,
  StyledButton,
} from './styles/StyledPopupConfirm';

const PopupConfirm = ({ hideAlert, removeArticle }) => {
  return (
    <WrapperHover onClick={hideAlert}>
      <Alert>
        <StyledH2>Czy na pewno chcesz usunąć?</StyledH2>
        <StyledP>Usunięte zostano wszystkie informacje na temat.</StyledP>
        <StyledButton onClick={removeArticle} confirm>
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
};

PopupConfirm.defaultProps = {
  hideAlert: () => {},
  removeArticle: () => {},
};

export default PopupConfirm;
