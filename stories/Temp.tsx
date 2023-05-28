import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function CircularProgressWithLabel(props) {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
        // padding:"40px",
        borderRadius: '50%',
        border: '12px solid whitesmoke',
      }}
    >
      <CircularProgress
        color="success"
        thickness={1.1}
        size={120}
        variant="determinate"
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <PowerSettingsNewIcon fontSize="large" color="success" />
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export const CircularStatic = () => {
  const [progress, setProgress] = React.useState(100);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      sx={{
        // display: "flex",
        // flexDirection:"column",
        // justifyContents: "space-between",
        // alignItem: "center",
        width: '100%',
        textAlign: 'center',
        // marginInline:"auto"
        // height:"100%"
      }}
    >
      <Box
        sx={{
          backgroundColor: 'green',
        }}
      >
        <Typography color="primary" variant="h2">
          PIA
        </Typography>
      </Box>
      <Box sx={{ padding: '60px' }}>
        <CircularProgressWithLabel value={progress} />
      </Box>
      <Box
        sx={{
          height: '100px',
          backgroundColor: 'teal',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <span>
          <h2 style={{ margin: '0' }}>VPN Server</h2>
          <h3 style={{ margin: '0' }}>US Baltimore</h3>
        </span>
        <ArrowForwardIosIcon />
      </Box>
      <Box
        sx={{
          // height: "10px",
          // borderRadius: "30%",
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',

          backgroundColor: 'orange',
        }}
      >
        <ExpandMoreIcon />
      </Box>
    </Box>
  );
};
