/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import React, { useState } from 'react';
import { standardArgs } from '../../../utils/storybook';

export default {
  title: 'User Interface/Dialogs',
  component: (<div></div>),
  argTypes: {
    open: {
      control: { type: 'boolean' },
    },
  },
  parameters: { options: { showPanel: false } },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const Template = ({ ...args }) => {

  return (<div></div>);
};

export const NotebookDialogStory = Template.bind({});
NotebookDialogStory.storyName = 'Notebook Dialog';
NotebookDialogStory.args = standardArgs;
