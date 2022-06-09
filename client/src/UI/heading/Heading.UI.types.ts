type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingHandlers = { onClick: any };
type HeadingMode = 'light' | 'dark';
type Type = 'light' | 'dark';

export interface HeadingProps {
  headingType?: HeadingTypes;
  handlers?: HeadingHandlers;
  mode?: HeadingMode;
  styles?: object;
  type?: Type;
  //   children?: JSX.Element;
}
