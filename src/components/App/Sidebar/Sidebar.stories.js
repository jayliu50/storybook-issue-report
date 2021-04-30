import React from 'react';
import { standardArgs, standardArgTypes } from '../../../utils/storybook';
import NotebookTab from './NotebookTab';

export default {
  title: 'User Interface/Sidebar',
  argTypes: standardArgTypes,
};

export const NotebookTabStory = ({ ...args }) => (
  <NotebookTab {...args}></NotebookTab>
);

NotebookTabStory.storyName = 'Notebook Tab';

NotebookTabStory.args = standardArgs;