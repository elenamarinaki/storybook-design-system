import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';
import { action } from '@storybook/addon-actions';

/**
 * configure metadata for the stories of this button
 */

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'primary click!!' },
    children: {
      defaultValue: 'Primary Button',
    },
  },
};

export default meta;

/**
 * creating a template to reduce the number of rendering functions
 */
const Template: Story<Props> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

/**
 * create a named function that RETURNS the RENDERING of our component
 * this will make our component (story) appear in the storybook
 */
// export const Primary = () => <Button variant="primary">CLICK ME</Button>;
// export const Secondary = () => <Button variant="secondary">CLICK ME 2</Button>;

Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button',
  onClick: action('secondary click!!'),
};
