# Storybook Design System 👩‍🎨

## Table of Contents 🌳

- [TSDX](#tsdx-)
- [Run locally](#run-locally-)
- [Creating our own button](#creating-our-own-button-)

## `TSDX` 📦

⬆️ [Back to top](#table-of-contents-)

- is meant for libraries (_we are not creating an app!_)
- we are using `tsdx` to quickly create a TypeScript project
- choosing `react-with-storybook` as a template
- creates a project with the following structure:

```txt
/example
  index.html
  index.tsx       # test your component here in a demo app
  package.json
  tsconfig.json
/src
  index.tsx       # EDIT THIS
/test
  blah.test.tsx   # EDIT THIS
/stories
  Thing.stories.tsx # EDIT THIS
/.storybook
  main.js
  preview.js
.gitignore
package.json
README.md         # EDIT THIS
tsconfig.json
```

## Run locally 💨

⬆️ [Back to top](#table-of-contents-)

- `npm start` -> runs `tsdx` in watch mode
- `npm run storybook` -> run storybook locally at `http://localhost:6006/`

## Creating our own button 🧩

⬆️ [Back to top](#table-of-contents-)

- create a `Button.tsx` file under `src`:

```javascript
import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary';
}

export const Button = ({ children, ...props }: Props) => {
  return <button {...props}>{children}</button>;
};
```

**⚠️ `Storybook` does not like `export default` here!! (but it's ok in the `stories` files - see next points 🤔)**

- the `HTMLAttributes<HTMLButtonElement>` prepares our component to expect attributes of a specific kind, in this case: **button**.
- ⚠️ this button _won't appear_ in our `Storybook`, until we create it's own 'story'
- we create `Button.stories.tsx` under `stories`:

```javascript
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
```

### Styling the buttons 💅

- the styling can be done with any technology of our choice: `CSS`, `SASS`, `Styled-Components`, etc.
- this can happen with **inline CSS** in the `Button.tsx` file
