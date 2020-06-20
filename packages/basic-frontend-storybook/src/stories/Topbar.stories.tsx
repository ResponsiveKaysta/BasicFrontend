import React from 'react';
import { action } from '@storybook/addon-actions';
import { Topbar } from 'responsive-it-common';

const onChange = action('change');

export default {
  title: 'Design System/layout/Topbar',
  component: Topbar,
};

export const defaultStory = () => <Topbar>Inhalte</Topbar>;

defaultStory.storyName = 'default';