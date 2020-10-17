import React from 'react';
import PropTypes from 'prop-types';
import {
  WrapperHover,
  Alert,
  StyledH2,
  StyledP,
  StyledButton,
} from './styles/StyledPopupConfirm';

const PopupConfirm = ({ hideAlert, removeArticle, dogName }) => {
  return (
    <WrapperHover onClick={hideAlert}>
      <Alert>
        <StyledH2>Czy na pewno chcesz usunąć?</StyledH2>
        <StyledP>
          Usunięte zostano wszystkie informacje na temat psa
          {' '}
          {dogName}
          !
        </StyledP>
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
  dogName: PropTypes.string,
};

PopupConfirm.defaultProps = {
  hideAlert: () => {},
  removeArticle: () => {},
  dogName: null,
};

export default PopupConfirm;
