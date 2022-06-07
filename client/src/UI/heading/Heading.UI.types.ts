type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingHandlers = { onClick: any };
type HeadingMode = 'light' | 'dark';

export interface HeadingProps {
  type?: HeadingTypes;
  handlers?: HeadingHandlers;
  mode?: HeadingMode;
  styles?: object;
  //   children?: JSX.Element;
}
