import React from 'react';

export default {
  title: 'User Interface/Gallery Item',
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    selected: {
      control: { type: 'boolean' },
    },
  },
};

const GalleryItemThumbnail = ({ ...args }) => (<div></div>);

export const GalleryItemThumbnailStory = GalleryItemThumbnail.bind({});

GalleryItemThumbnailStory.storyName = 'Thumbnail';
GalleryItemThumbnailStory.args = {
  title: 'Half Letter',
  description: '5.5" x 8.5"',
  selected: false,
  width: 280,
};

const GalleryItemPattern = ({ ...args }) => (<div></div>);

export const GalleryItemPatternStory = GalleryItemPattern.bind({});

GalleryItemPatternStory.storyName = 'Pattern';
GalleryItemPatternStory.args = {
  title: 'Grid',
  description: '5mm',
  selected: false,
  width: 280,
};
