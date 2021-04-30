import forms from './forms';
import buttons from './buttons';
import modals from './modals';
import { ColorOptions } from '../constants';

const theme = {
  breakpoints: ['28em', '64em', '108em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'Quicksand',
    heading: 'inherit',
  },
  // fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  colors: {
    text: '#3b3841',
    background: '#ededed',
    primary: '#0e9594',
    secondary: '#127475',
    highlight: '#efefef',
    muted: '#d8d8d8',
    darkRed: '#562c2c',
    red: '#f2542d',
    wheat: '#f5dfbb',
    green: '#0e9594',
    darkGreen: '#127475',
    pattern: {
      [ColorOptions.BLACK]: '#000000',
      [ColorOptions.BLUE]: '#0099ff',
      [ColorOptions.RED]: '#ff0000',
    },
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      mb: '0.5rem',
    },
    landing: {
      header: {
        fontSize: ['30px', '36px', '40px', '44px'],
        mb: '0.5rem',
      },
      body: {
        fontSize: ['16px', '20px', '16px', '20px'],
        color: 'text',
        lineHeight: 1.5,
        mb: '1.5rem',
      },
    },
    sidebar: {
      header: {
        fontSize: ['16px', '16px', '20px', '20px'],
        fontWeight: 'heading',
        color: 'primary',
        mb: '0.5rem',
      },
    },
    body: {
      fontFamily: 'body',
      fontWeight: 500,
    },
    label: {
      fontSize: '0.9em',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      // backgroundColor: ['pink', 'yellow', 'lightgreen', 'lightblue'],
    },
    h1: {
      variant: 'text.heading',
      fontSize: ['30px', '36px', '40px', '44px'],
    },
    h2: {
      variant: 'text.heading',
      fontSize: ['24px', '36px', '36px', '36px'],
    },
    h3: {
      variant: 'text.heading',
      fontSize: ['20px', '24px', '20px', '24px'],
    },
    h4: {
      variant: 'text.heading',
      fontSize: ['20px', '36px', '16px', '20px'],
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    p: {
      variant: 'text.landing.body',
    },
    strong: {
      fontWeight: 700,
      color: 'darkGreen',
    },
    ul: {
      variant: 'text.landing.body',
    },
    li: {
      variant: 'text.landing.body',
      mb: '0.5rem',
      listStyle: 'disc',
      ml: '2rem',
    },
    aside: {
      variant: 'text.landing.body',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    button: {
      fontFamily: 'body',
      backgroundColor: 'darkGreen',
      border: 'transparent',
      height: '2rem',
      borderRadius: '4px',
      padding: '0.2rem 0.75rem',
      textAlign: 'center',
      cursor: 'pointer',
      fontWeight: '600',
      color: 'white',
      transition: 'all 400ms',
      '&:hover': {
        backgroundColor: 'primary',
        transition: 'all 400ms',
      },
    },
  },
  ...forms,
  ...buttons,
  ...modals,
};

export default theme;
