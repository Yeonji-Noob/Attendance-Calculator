import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { useMediaQuery } from '@mui/material';

interface OneDayPerProps {
  numberCalc: () => number;
}


const PercentDiv = styled.div`

display: flex;
flex-direction: column;
align-items: center;


`;

export const OneDayPercentage = ({ numberCalc }: OneDayPerProps) => {

  //(5/5)
  // 미디어쿼리에서 한참 막혔는데 useMediaQuery라는 훅이 있었다...

  const isMobile = useMediaQuery("(max-width: 430px)");

  const size = isMobile ? 60 : 100;
  const fontsize = isMobile ? 15 : 20;


  return (
    <PercentDiv>
      <Box sx={{ position: 'relative', display: 'inline-flex', marginTop: '15px' }}>
        <CircularProgress variant="determinate" value={numberCalc()} size={size} thickness={1.5} style={{ zIndex: '99', color: '#FF7D0A' }} />
        <CircularProgress
          variant="determinate"
          value={100}
          size={size}
          style={{ position: 'absolute', color: '#5c2e06' }}
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
          >{`${numberCalc()}%`}</Typography>
        </Box>
      </Box>
      <p>1일 = {numberCalc()}%</p>
    </PercentDiv>
  );
};
