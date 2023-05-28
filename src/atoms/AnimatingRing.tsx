import React, { FC } from 'react';
import { Box, BoxProps } from '@mui/material';

type PowerIconProps = Pick<BoxProps, 'sx' | 'children'>;

const AnimatingRingStyle = {
  width: 10,
  height: 20,
  backgroundColor: 'success',

  //   '&:hover': {
  //     // backgroundColor: 'primary.main',
  //     opacity: [0.9, 0.8, 0.7],
  //   },
};

export const AnimatingRing: FC = ({ children, ...rest }: PowerIconProps) => {
  return <Box {...rest}>{children}</Box>;
};

AnimatingRing.defaultProps = {
  sx: { ...AnimatingRingStyle },
  children: null,
};
