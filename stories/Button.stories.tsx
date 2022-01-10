import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';

/**
 * configure metadata for the stories of this button
 */

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

/**
 * create a named function that RETURNS the RENDERING of our component
 * this will make our component (story) appear in the storybook
 */
export const Default = () => <Button variant="primary">CLICK ME</Button>;
