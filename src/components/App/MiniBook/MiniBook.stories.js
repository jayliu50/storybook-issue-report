import React from 'react';


import { standardArgs, standardArgTypes } from '../../../utils/storybook';

const maxPages = 32;

// https://storybook.js.org/docs/react/essentials/controls#fully-custom-args
export default {
  title: 'User Interface/Mini Book',
  component: (<div></div>),
};

const Template = ({ ...args }) => (<div></div>);

export const MiniBookStory = Template.bind({});

MiniBookStory.storyName = 'Mini Book';

MiniBookStory.argTypes = {
  ...standardArgTypes,
  currentPage: {
    control: {
      type: 'range',
      min: 0,
      max: maxPages + 2 + 2,
      step: 2, // 2 each for inner and outer cover
    },
  },
  showToScale: {
    control: { type: 'boolean' },
  },
};

MiniBookStory.args = {
  ...standardArgs,
  flyleaf: false,
  showToScale: false,
  pages: maxPages,
  currentPage: 0,
};

export const BigMiniBookStory = Template.bind({});

BigMiniBookStory.storyName = 'Big Mini Book';

BigMiniBookStory.argTypes = {
  ...standardArgTypes,
  currentPage: {
    control: {
      type: 'range',
      min: 0,
      max: 884 + 2 + 2,
      step: 2, // 2 each for inner and outer cover
    },
  },
  showToScale: {
    control: { type: 'boolean' },
  },
};

BigMiniBookStory.args = {
  ...standardArgs,
  flyleaf: false,
  showToScale: false,
  pages: 884,
  currentPage: 0,
};

export const MiniBookStoryFlyleaf = Template.bind({});

MiniBookStoryFlyleaf.storyName = 'Mini Book Flyleaf';

MiniBookStoryFlyleaf.argTypes = {
  ...standardArgTypes,
  currentPage: {
    control: {
      type: 'range',
      min: 0,
      max: maxPages + 2 + 2 + 2,
      step: 2, // 2 each for inner and outer cover, 2 for flyleafs
    },
  },
  showToScale: {
    control: { type: 'boolean' },
  },
};

MiniBookStoryFlyleaf.args = {
  ...standardArgs,
  flyleaf: true,
  showToScale: false,
  pages: maxPages,
  currentPage: 0,
};
