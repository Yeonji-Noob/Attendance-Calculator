import { IncentiveMoney } from "./";

interface absentInfoProps {
  minusTime: number;
  absentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  calcAttendance: () => number;
  attendancePercentage: number;
  percentageCalc: () => number;
  minusPercentage: number;
  absent: number;
}

export const AbsentInfo = (absentInfoProps: absentInfoProps) => {

  const { minusTime, absentChange, calcAttendance, attendancePercentage, percentageCalc, minusPercentage, absent } = absentInfoProps;

  return (
    <div style={{ display: minusTime ? 'block' : 'none' }} >
      <p onChange={absentChange}>현재 출석일수는 {calcAttendance()}일 ({attendancePercentage}%) 입니다</p>
      <p onChange={absentChange}>{percentageCalc()}% 중 {minusPercentage}% 차감되었습니다.</p>
      <p onChange={absentChange}>결석일수는 총 {absent}일 이에요.</p>
      < IncentiveMoney attendancePercentage={attendancePercentage} />
    </div>
  );
} 