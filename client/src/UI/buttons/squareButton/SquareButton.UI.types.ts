type SquareButtonTypes = 'default' | 'approve' | 'cancel' | 'stop';
type SquareButtonHandlers = {
  onSubmit: () => {};
};
type SquareButtonMode = 'light' | 'dark';

export interface SquareButtonProps {
  type?: SquareButtonTypes;
  handlers?: SquareButtonHandlers;
  attr?: React.HtmlHTMLAttributes<HTMLButtonElement>;
  mode?: SquareButtonMode;
  styles?: React.StyleHTMLAttributes<HTMLButtonElement>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
