import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

interface Attendance80Props {
  getMoney: () => number;
}

const PercentDiv = styled.div`

display: flex;
flex-direction: column;
align-items: center;

`;

export const Attendance80Percent = ({ getMoney }: Attendance80Props) => {
  return (
    <PercentDiv>
      <Box sx={{ position: 'relative', display: 'inline-flex', marginTop: '15px' }}>
        <CircularProgress variant="determinate" value={80} size={100} thickness={1.5} style={{ zIndex: '99', color: '#6200EA' }} />
        <CircularProgress
          variant="determinate"
          value={100}
          className={"background"}
          size={100}
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
            fontSize={20}
          >{'80%'}</Typography>
        </Box>
      </Box>
      <p style={{ textAlign: 'center' }}>{getMoney()}일 = 80%</p>
    </PercentDiv>
  );
}