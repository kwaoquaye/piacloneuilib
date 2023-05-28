import React from 'react';
import { PowerIcon } from '../atoms/PowerIcon';
import { PowerIconWrapper } from '../atoms/PowerIconWrapper';

type Props = {};

const PIALauncher = (props: Props) => {
  return (
    <>
      <PowerIconWrapper>
        <PowerIcon />
      </PowerIconWrapper>
    </>
  );
};

export { PIALauncher };
