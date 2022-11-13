import React, { FC, ReactNode } from 'react';
import cn from 'clsx';

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const Lay: FC<Props> = ({ children, ...props }) => {
  const styles = cn(
    'relative inline-flex items-center justify-center cursor-pointer'
  );
  return (
    <div className={styles} {...props}>
      Under Construction
      {children}
    </div>
  );
};

export default Lay;
