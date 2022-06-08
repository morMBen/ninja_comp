import React from 'react';
import { Wrapper } from './Span.style';

type SpanPropsType = 'none' | 'decorationLine';

type SpanProps = {
  children: JSX.Element;
  type: SpanPropsType;
};
const Span: React.FC<SpanProps> = ({ children, type }) => {
  return <Wrapper data-type={type}>{children}</Wrapper>;
};

export default Span;
