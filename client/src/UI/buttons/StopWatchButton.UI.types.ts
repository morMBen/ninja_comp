export type ButtonType = 'start' | 'pause' | 'reset' | 'end' | 'buzzer' | 'resume' | 'off';

export type StopWatchButtonProps = {
  onClick?: () => void | boolean;
  text: string;
  buttonType: ButtonType;
};
export type WrapperProps = {
  buttonType: ButtonType;
};
