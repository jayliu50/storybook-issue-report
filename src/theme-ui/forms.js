const inputCommon = {
  variant: 'text.body',
  borderColor: 'primary',
  background: 'white',
  lineHeight: 'normal',
};

const forms = {
  radio: {
    color: 'green',
    bg: 'transparent',
    border: 'thin',
    borderRadius: 'circle',
    ...{
      'input:focus ~ &': {
        bg: 'transparent',
        border: 'thick',
      },
      '> path': {
        fill: 'primary',
      },
      'input:checked ~ &': {
        '> path': {
          fill: 'primary',
        },
      },
    },
  },
  label: {
    variant: 'text.body',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    // mb: '0.5rem', // NO. then it makes it not center-aligned
  },
  input: {
    ...inputCommon,
    textAlign: 'center',
    '&:focus': {
      borderColor: 'primary',
      boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
      outline: 'none',
    },
    '&[disabled]': {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    },
  },
  select: {
    ...inputCommon,
    width: 'unset',
    pr: 28, // account for little dropdown
    '&:focus': {
      borderColor: 'primary',
      boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
      outline: 'none',
    },
  },
  checkbox: {
    // ...inputCommon,
    '&:focus': {
      // borderColor: 'transparent',
      // boxShadow: 'none',
      // borderColor: 'primary',
      // boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
      // outline: 'none',
    },
  },
  textarea: {
    borderColor: 'primary',
    '&:focus': {
      borderColor: 'primary',
      boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
      outline: 'none',
    },
  },
  slider: {
    // todo: eventually, style the thumb: https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/
    bg: 'muted',
    my: '1rem',
  },
};

export default forms;
