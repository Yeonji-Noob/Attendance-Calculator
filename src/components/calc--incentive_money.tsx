import Stack from "@mui/material/Stack";
import Alert from '@mui/material/Alert';
// import { useRef, useEffect } from 'react';

type IncentiveMoneyProps = {
  attendancePercentage: number
}


export const IncentiveMoney = ({ attendancePercentage }: IncentiveMoneyProps) => {


  //훈련장려금을 받을 수 있을까?

  const incentive = () => {

    if (attendancePercentage < 80) {

      return (
        <Stack spacing={2} sx={{
          width: "100%", fontFamily: 'SUIT Variable',
          fontSize: '12px'
        }}>
          <Alert variant="filled" severity="error">80% 미만이어서 훈련장려금을 받을 수 없어요. ㅠㅠ</Alert>
        </Stack>
      );
    }

    else if (attendancePercentage === 80) {
      return (
        <Stack spacing={2} sx={{
          width: "100%", fontFamily: 'SUIT Variable',
          fontSize: '12px'
        }}>
          <Alert variant="filled" severity="warning" ><strong>80% 아슬아슬해요.</strong><br />(주의! 전산 오류가 나면 훈련장려금 미지급 될 수 있어요!)</Alert>
        </Stack>
      );
    }

    else if (attendancePercentage > 80) {


      return (
        <>
          <Stack spacing={2} sx={{
            width: "100%", fontFamily: 'SUIT Variable',
            fontSize: '12px',
          }} >
            <Alert variant="filled" severity="success" >80% 이상이어서 훈련장려금을 받을 수 있어요!</Alert>
          </Stack>
        </>
      );

    }

  }

  return (
    <>
      {incentive()}
    </>
  );
}
