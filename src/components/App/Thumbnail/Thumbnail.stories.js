import React from 'react';
import Thumbnail from './';
import { standardArgs, standardArgTypes } from '../../../utils/storybook';

export default {
  title: 'User Interface/Notebook Thumbnail',
  component: Thumbnail,
  argTypes: standardArgTypes,
};

const Template = ({ ...args }) => <Thumbnail {...args} />;

export const ThumbnailStory = Template.bind({});

ThumbnailStory.storyName = 'Thumbnail';

ThumbnailStory.args = standardArgs;
