import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PowerIcon } from '../../src/atoms/PowerIcon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/PowerIcon',
  component: PowerIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof PowerIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PowerIcon> = (args) => (
  <PowerIcon {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: 'warning',
  fontSize: 'small',
};
