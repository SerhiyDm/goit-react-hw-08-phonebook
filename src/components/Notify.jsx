import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

export const NotifyError = message =>
  toast.error(message, {
    duration: 3000,
    position: 'top-center',

    style: {
      backgroundColor: 'rgba(227, 25, 25, 0.409)',
      width: '50vw',
      color: 'rgba(27, 16, 16, 0.947)',
      fontSize: '1.5em',
      fontWeight: '900',
    },
    icon: '🤔',
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });

NotifyError.propTypes = {
  message: PropTypes.string.isRequired,
};
