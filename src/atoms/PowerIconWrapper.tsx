import React from 'react';
import { Box, BoxProps } from '@mui/material';
import '../powerIconWrapperStyle.module.css';
type PowerIconProps = Pick<BoxProps, 'sx' | 'children'>;

const powerIconWrapperStyle = {
  width: 100,
  height: 100,
  maxWidth: '100%',
  backgroundColor: 'success',
  borderRadius: '50%',
  border: '5px solid',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: '1s ease-in',
  // animation: 'spin-clockwise 3.8s infinite linear',

  '&:hover': {
    borderColor: 'success',
    // backgroundColor: 'primary.main',
    opacity: [0.9, 0.8, 0.7],
    // animation: 'Rotate 2s infinite linear',
  },
};

export const PowerIconWrapper = ({ children, ...rest }: PowerIconProps) => {
  return <Box {...rest}>{children}</Box>;
};

PowerIconWrapper.defaultProps = {
  sx: { ...powerIconWrapperStyle },
  children: null,
};
