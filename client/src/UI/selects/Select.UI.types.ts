import { ChangeEvent } from 'react';

export type SelectUIProps = {
  type: string;
  options: number[] | string[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => any;
  value: string;
};
