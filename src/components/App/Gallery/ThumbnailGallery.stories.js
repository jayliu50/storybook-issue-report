import React from 'react';
import {
  CutOrientation,
  NullOption,
  PageOrientation,
  PagesPerSheet,
  SheetSizeOptions,
} from '../../../constants';

export default {
  title: 'User Interface/Gallery/Thumbnail',
  component: (<div></div>),
  argTypes: {
    sheetSize: {
      options: [NullOption, ...Object.values(SheetSizeOptions)],
      control: {
        type: 'select',
        labels: { [NullOption]: 'Any', ...SheetSizeOptions },
      },
    },
    pagesPerSheet: {
      options: [NullOption, ...Object.values(PagesPerSheet)],
      control: {
        type: 'select',
        labels: { [NullOption]: 'Any', ...PagesPerSheet },
      },
    },
    pageOrientation: {
      options: [NullOption, ...Object.values(PageOrientation)],
      control: {
        type: 'select',
        labels: { [NullOption]: 'Any', ...PageOrientation },
      },
    },
    cutOrientation: {
      options: [NullOption, ...Object.values(CutOrientation)],
      control: {
        type: 'select',
        labels: { [NullOption]: 'Any', ...CutOrientation },
      },
    },
  },
};

export const ThumbnailGalleryStory = (() => <div></div>).bind({});

ThumbnailGalleryStory.storyName = 'Thumbnail';
ThumbnailGalleryStory.args = {
  sheetSize: NullOption,
  pagesPerSheet: NullOption,
  pageOrientation: NullOption,
  cutOrientation: NullOption,
  itemWidth: 200,
};
