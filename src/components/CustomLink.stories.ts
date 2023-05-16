import type { Meta, StoryObj } from '@storybook/react';

import { CustomLink } from './CustomLink';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CustomLink> = {
  title: 'Example/CustomLink',
  component: CustomLink,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CustomLink>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Story1: Story = {
  // props to a component.
  args: {
    href: '/about',
    primary: true,
    children: 'Go to About',
  },
};

export const Story2: Story = {
  args: {
    href: '/different-page',
    children: 'Go to Different Page',
  },
};
