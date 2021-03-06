export type ButtonType =
  | 'start'
  | 'pause'
  | 'split'
  | 'reset'
  | 'end'
  | 'buzzer'
  | 'resume'
  | 'off'
  | 'pass'
  | 'fell';

export type StopWatchButtonProps = {
  onClick?: () => void | boolean;
  text: ButtonType;
  buttonType: ButtonType;
};
export type WrapperProps = {
  buttonType: ButtonType;
};
