import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CircularStatic } from './Temp';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/CircularStatic',
  component: CircularStatic,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof CircularStatic>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CircularStatic> = (args: any) => (
  <CircularStatic {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  value: 10,
};
