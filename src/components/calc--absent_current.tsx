import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { useMediaQuery } from '@mui/material';

const PercentDiv = styled.div`

display: flex;
flex-direction: column;
align-items: center;

`;

interface CurrentAttendanceProps {
  absentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  calcAttendance: () => number;
  attendancePercentage: number;
}

export const CurrentAttendance = ({ absentChange, calcAttendance, attendancePercentage }: CurrentAttendanceProps) => {


  const isMobile = useMediaQuery("(max-width: 430px)");

  const size = isMobile ? 80 : 100;
  const fontsize = isMobile ? 15 : 20;

  return (
    <PercentDiv>
      <Box sx={{ position: 'relative', display: 'inline-flex', marginTop: '15px' }}>
        <CircularProgress variant="determinate" value={attendancePercentage} size={size} thickness={1.5} style={{ zIndex: '99' }} />
        <CircularProgress
          variant="determinate"
          value={100}
          className={"background"}
          size={size}
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
            fontSize={fontsize}
          >{`${attendancePercentage}%`}</Typography>
        </Box>
      </Box>
      <p onChange={absentChange} style={{ marginTop: ' 5px' }}>현 출석일수 = {calcAttendance()}일 ({attendancePercentage}%)</p>
    </PercentDiv>

  );

}