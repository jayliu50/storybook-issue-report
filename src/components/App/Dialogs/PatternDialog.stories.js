/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import React, { useState } from 'react';

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
  const [selectedItem, setSelectedItem] = useState(args);

  return (<div></div>);
};

export const PatternDialogStory = Template.bind({});
PatternDialogStory.storyName = 'Pattern Dialog';
PatternDialogStory.args = {
  open: false,
};
