import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { OverlayStyled, ModalStyled } from './Modal.styled';
import { ButtonClose } from './ButtonClose/ButtonClose';

const modalRoot = document.querySelector('#modal-root');
export const Modal = ({ children, onClose, buttonOnModal }) => {
  useEffect(() => {
    const closeByEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.document.querySelector('body').style.overflow = 'hidden';

    window.addEventListener('keydown', closeByEsc);
    return () => {
      window.removeEventListener('keydown', closeByEsc);
      window.document.querySelector('body').style.overflow = 'scroll';
    };
  });
  const closeByClick = e => {
    if (
      e.target.nodeName !== 'FORM' &&
      e.target.nodeName !== 'INPUT' &&
      e.target.nodeName !== 'BUTTON' &&
      e.target.nodeName !== 'LABEL' &&
      e.target.nodeName !== 'LI' &&
      e.target.nodeName !== 'path' &&
      e.target.nodeName !== 'svg' &&
      e.target.id !== 'modalBox'
    ) {
      onClose();
      return;
    }
  };

  return createPortal(
    <OverlayStyled onClick={closeByClick}>
      {!buttonOnModal && <ButtonClose onClose={onClose} />}
      <ModalStyled>
        {buttonOnModal && <ButtonClose onClose={onClose} />}
        {children}
      </ModalStyled>
    </OverlayStyled>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  buttonOnModal: PropTypes.bool,
};
