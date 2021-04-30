import React from 'react';
import GlobalStyle from '../src/styles/global';

import { ThemeProvider } from 'theme-ui';
import theme from '../src/theme-ui';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyle />
    </ThemeProvider>
  ),
];

export const parameters = {
  layout: 'fullscreen',
  options: {
    storySort: {
      order: [
        'Page Elements',
        ['Region', 'Page', 'Sheet', 'Section'],
        'Test Prints',
        ['Simple Book', 'Complex Book'],
        'User Interface',
        [
          'Input',
          'Notebook Thumbnail',
          'Mini Book',
          'Sidebar',
          'Gallery Item',
          'Gallery',
          'Dialogs',
        ],
      ],
    },
  },
};
