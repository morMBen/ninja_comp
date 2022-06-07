import { ChangeEvent } from 'react';

type InputHandlers = { onClick: any };
type InputMode = 'light' | 'dark';

export interface InputProps {
  handlers?: InputHandlers;
  mode?: InputMode;
  styles?: object;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => any;
  type: string;
}
