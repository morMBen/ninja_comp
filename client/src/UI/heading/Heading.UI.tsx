import React from 'react';
import { Wrapper } from './Heading.UI.style';
import { HeadingProps } from './Heading.UI.types';

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  headingType,
  handlers,
  mode = 'light',
  styles,
  children,
  type,
}) => {
  const CustomTag = `${headingType}` as keyof JSX.IntrinsicElements;
  return (
    <Wrapper>
      <CustomTag style={styles} {...handlers} data-mode={mode} data-type={type}>
        {children}
      </CustomTag>
    </Wrapper>
  );
};

export default Heading;
