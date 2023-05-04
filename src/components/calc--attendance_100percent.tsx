import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

interface Attendance100Props {
  percentageCalc: () => number;
  attendanceAcademy: number;
}

const PercentDiv = styled.div`

display: flex;
flex-direction: column;
align-items: center;

`;



export const Attendance100Percent = ({ percentageCalc, attendanceAcademy }: Attendance100Props) => {


  return (
    <PercentDiv>
      <Box sx={{ position: 'relative', display: 'inline-flex', marginTop: '15px' }}>
        <CircularProgress variant="determinate" value={percentageCalc()} size={100} thickness={1.5}
          style={{ color: '#05C193' }} />
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
          >{`${percentageCalc()}%`}</Typography>
        </Box>
      </Box>
      <p>{attendanceAcademy}일 = {percentageCalc()}%</p>
    </PercentDiv>
  );
}