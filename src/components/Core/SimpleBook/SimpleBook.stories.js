import React from 'react';


import { standardArgs, standardArgTypes } from '../../../utils/storybook';

// https://storybook.js.org/docs/react/essentials/controls#fully-custom-args
export default {
  title: 'Test Prints/Simple Book',
  component: (<div></div>),
  argTypes: standardArgTypes,
};

const Template = ({ ...args }) => <div {...args} />;

export const SimpleBookStory = Template.bind({});

SimpleBookStory.args = standardArgs;
