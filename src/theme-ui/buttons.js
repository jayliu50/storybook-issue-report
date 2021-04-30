import { darken } from '@theme-ui/color';

const buttonBase = {
  variant: 'text.body',
  transition: 'all 300ms',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: 'muted',
};

const buttonHoverBase = {
  transition: 'all 300ms',
};

const buttons = {
  primary: {
    ...buttonBase,
    borderColor: 'primary',
    color: 'background',
    bg: 'primary',
    '&:hover': {
      ...buttonHoverBase,
      bg: darken('primary', 0.1),
      borderColor: darken('primary', 0.1),
    },
  },
  secondary: {
    ...buttonBase,
    color: 'text',
    bg: 'white',
    '&:hover': {
      ...buttonHoverBase,
      bg: darken('white', 0.1),
    },
  },
  icon: {
    ...buttonBase,
    border: 'none',
    '&:hover': {
      ...buttonHoverBase,
      bg: darken('white', 0.1),
    },
    '&:focus': {
      ...buttonHoverBase,
      border: 'none',
      bg: darken('white', 0.1),
    },
  },
};

export default buttons;
