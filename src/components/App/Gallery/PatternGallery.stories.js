import React from 'react';
import { ColorOptions } from '../../../constants';

export default {
  title: 'User Interface/Gallery/Pattern',
  component: (<div></div>),
  argTypes: {
    color: {
      options: Object.values(ColorOptions),
      control: {
        type: 'select',
        labels: ColorOptions,
      },
    },
  },
};

export const PatternGalleryStory = (() => <div></div>).bind({});

PatternGalleryStory.storyName = 'Pattern';
PatternGalleryStory.args = {
  color: ColorOptions.BLACK,
  itemWidth: 200,
  magnification: 300,
};
