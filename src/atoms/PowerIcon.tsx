import * as React from 'react';

import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { IconProps } from '@mui/material/Icon';

type launcherState = 'on' | 'off';

type BaseIconProps = Pick<IconProps, 'fontSize'>;

interface PowerIconProps extends BaseIconProps {
  PIALauncherState: launcherState;
}

export const PowerIcon = ({ PIALauncherState, ...rest }: PowerIconProps) => {
  return (
    <div>
      <PowerSettingsNewIcon
        color={PIALauncherState == 'on' ? 'success' : 'warning'}
        {...rest}
      />
    </div>
  );
};

PowerIcon.defaultProps = {
  PIALauncherState: 'warning',
  fontSize: 'large',
};
