import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /**
   * providing a text for the button
   */
  children: ReactNode;
  /**
   * which variant would you like to use?
   */
  variant: 'primary' | 'secondary';
}

/**
 * this is our first button! 🎉
 */
export const Button = ({ children, variant = 'primary', ...props }: Props) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor:
          variant === 'primary' ? 'palevioletred' : 'palegoldenrod',
        border: 'none',
        borderRadius: 85,
        padding: 10,
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};
