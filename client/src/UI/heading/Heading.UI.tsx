import React from 'react';
import { HeadingProps } from './Heading.UI.types';

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  type,
  handlers,
  mode = 'light',
  styles,
  children,
}) => {
  const CustomTag = `${type}` as keyof JSX.IntrinsicElements;
  return (
    <CustomTag style={styles} {...handlers} data-mode={mode} data-type={type}>
      {children}
    </CustomTag>
  );
};

export default Heading;
