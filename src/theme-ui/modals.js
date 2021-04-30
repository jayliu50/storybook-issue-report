const modals = {
  modals: {
    // Modal components
    backdrop: {
      zIndex: `backdrop`,
      position: `fixed`,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `rgba(0,0,0,0.3)`,
    },
    content: {
      px: '1rem',
      flexGrow: 1,
      overflowY: 'scroll',
    },
    footer: {
      // minHeight: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      pt: '1rem',
      px: '0.25rem',
      '& button': {
        ml: '0.5rem',
      },
    },
    title: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      // minHeight: 16,
      px: '1rem',
    },

    // Modal variants
    default: {
      backgroundColor: 'background',
      borderRadius: 'lg',
      boxShadow: `md`,
      display: `flex`,
      flexDirection: `column`,
      maxHeight: `80vh`,
      minHeight: '16rem',
      minWidth: '48rem',
      // maxWidth: 'min(90vw, 74rem)',
      position: `absolute`,
      top: [`25%`, `10%`, `10%`],
      zIndex: `modal`,
      pt: '2rem',
      px: '1rem',
      pb: '1rem',
    },
    defaultFullScreen: {
      backgroundColor: 'background',
      borderRadius: 0,
      display: `flex`,
      flexDirection: `column`,
      minHeight: '100vh',
      maxHeight: '100vh',
      height: `fill-available`,
      position: `absolute`,
      top: 0,
      width: `100vw`,
      zIndex: `modal`,
    },
  },
  zIndices: {
    backdrop: 100,
    modal: 110,
  },
};

export default modals;
