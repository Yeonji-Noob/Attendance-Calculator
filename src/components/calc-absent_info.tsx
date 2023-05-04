import { IncentiveMoney, CurrentAttendance, AbsentAllDay, MinusDay } from "./";

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
    <>
      <div style={{
        display: minusTime ? 'block' : 'none',
        width: '100%',
        background: 'linear-gradient(160deg, #000000df 0%, #060B28 100%)',
        borderRadius: '10px',
        padding: '5px',
        margin: '20px 0'
      }} >
        <CurrentAttendance absentChange={absentChange} calcAttendance={calcAttendance} attendancePercentage={attendancePercentage} />
        <MinusDay absentChange={absentChange} percentageCalc={percentageCalc} minusPercentage={minusPercentage} />
        <AbsentAllDay absentChange={absentChange} absent={absent} />
      </div>
      <div style={{
        display: minusTime ? 'block' : 'none'
      }}>
        < IncentiveMoney attendancePercentage={attendancePercentage} />
      </div>

    </>
  );
} 