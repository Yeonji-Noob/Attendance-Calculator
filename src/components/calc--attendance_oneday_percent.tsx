import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

interface OneDayPerProps {
  numberCalc: () => number;
}

const PercentDiv = styled.div`

display: flex;
flex-direction: column;
align-items: center;

`;

export const OneDayPercentage = ({ numberCalc }: OneDayPerProps) => {
  return (
    <PercentDiv>
      <Box sx={{ position: 'relative', display: 'inline-flex', marginTop: '15px' }}>
        <CircularProgress variant="determinate" value={numberCalc()} size={100} thickness={1.5} style={{ zIndex: '99' }} />
        <CircularProgress
          variant="determinate"
          value={100}
          className={"background"}
          size={100}
          style={{ position: 'absolute', color: '#052F6D' }}
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
            fontSize={20}
          >{`${numberCalc()}%`}</Typography>
        </Box>
      </Box>
      <p>1일 = {numberCalc()}%</p>
    </PercentDiv>
  );
};
