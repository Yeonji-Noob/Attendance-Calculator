import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { useMediaQuery } from '@mui/material';

interface Attendance80Props {
  getMoney: () => number;
}

const PercentDiv = styled.div`

display: flex;
flex-direction: column;
align-items: center;

`;

export const Attendance80Percent = ({ getMoney }: Attendance80Props) => {

  const isMobile = useMediaQuery("(max-width: 430px)");
  const size = isMobile ? 60 : 100;
  const fontsize = isMobile ? 15 : 20;

  return (
    <PercentDiv>
      <Box sx={{ position: 'relative', display: 'inline-flex', marginTop: '15px' }}>
        <CircularProgress variant="determinate" value={80} size={size} thickness={1.5} style={{ zIndex: '99', color: '#6200EA' }} />
        <CircularProgress
          variant="determinate"
          value={100}
          className={"background"}
          size={size}
          style={{ position: 'absolute', color: '#370083' }}
          thickness={1.5}
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
          <Typography
            variant="caption"
            component="div"
            color="#ffffff"
            fontSize={fontsize}
          >{'80%'}</Typography>
        </Box>
      </Box>
      <p style={{ textAlign: 'center' }}>{getMoney()}일 = 80%</p>
    </PercentDiv>
  );
}