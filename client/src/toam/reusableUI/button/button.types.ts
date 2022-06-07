import React from 'react';

type ButtonTypes = 'default' | 'start' | 'buzzer' | 'stop';
type ButtonHandlers = { onClick: () => {}; onSubmit: () => {} };
type ButtonMode = 'light' | 'dark';

export interface ButtonProps {
  type?: ButtonTypes;
  handlers?: ButtonHandlers;
  attr?: React.HtmlHTMLAttributes<HTMLButtonElement>;
  mode?: ButtonMode;
  styles?: React.StyleHTMLAttributes<HTMLButtonElement>;
}
