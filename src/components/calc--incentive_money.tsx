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
          width: "100%"
        }}>
          <Alert variant="filled" severity="error" style={{ fontSize: '14px' }} >80% 미만이어서 훈련장려금을 받을 수 없어요</Alert>
        </Stack>
      );
    }

    else if (attendancePercentage === 80) {
      return (
        <Stack spacing={2} sx={{
          width: "100%"
        }}>
          <Alert variant="filled" severity="warning" ><strong style={{ fontWeight: '900', fontSize: '14px' }}>80% 아슬아슬해요</strong><br />(주의! 전산 오류시 훈련장려금 미지급 될 수 있어요!)</Alert>
        </Stack>
      );
    }

    else if (attendancePercentage > 80) {


      return (
        <>
          <Stack spacing={2} sx={{
            width: "100%"
          }}>
            <Alert variant="filled" severity="success" style={{ fontSize: '14px' }} >80% 이상이어서 훈련장려금을 받을 수 있어요!</Alert>
          </Stack >
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
