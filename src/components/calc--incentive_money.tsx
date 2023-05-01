type IncentiveMoneyProps = {
  attendancePercentage: number
}

export const IncentiveMoney = ({ attendancePercentage }: IncentiveMoneyProps) => {


  //훈련장려금을 받을 수 있을까?

  const incentive = () => {

    if (attendancePercentage < 80) {
      return (
        <p style={{ color: '#B71C1C' }}>80% 미만이어서 훈련장려금을 받을 수 없어요. ㅠㅠ</p>
      );
    }

    else if (attendancePercentage === 80) {
      return (
        <p style={{ color: '#FFD600' }}>80% 아슬아슬해요. (주의! 전산 오류가 나면 훈련장려금 미지급 될 수 있어요!)</p>
      );
    }

    else if (attendancePercentage > 80) {
      return (
        <p style={{ color: '#00C853' }}>80% 이상이어서 훈련장려금을 받을 수 있어요!</p>
      );

    }

  }

  return (
    <>
      {incentive()}
    </>
  );
}
