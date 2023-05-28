import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PowerIconWrapper } from '../../src/atoms/PowerIconWrapper';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'atoms/PowerIconWrapper',
  component: PowerIconWrapper,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof PowerIconWrapper>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PowerIconWrapper> = (args) => (
  <PowerIconWrapper {...args} />
);

export const Default = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
// export const Primary = Template.bind({});

// Primary.args = {
//   primary: true,
//   label: 'PowerIconWrapper',
// };
