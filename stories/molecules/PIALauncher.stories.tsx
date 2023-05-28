import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PIALauncher } from '../../src/molecules/PIALauncher';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'molecules/PIALauncher',
  component: PIALauncher,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof PIALauncher>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PIALauncher> = (args) => (
  <PIALauncher {...args} />
);

export const Default = Template.bind({});

export const Off = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Off.args = {
  primary: true,
  label: 'PIALauncher',
};
