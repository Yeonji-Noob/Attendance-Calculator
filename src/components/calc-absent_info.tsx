import { IncentiveMoney, CurrentAttendance, AbsentAllDay, MinusDay } from "./";
import styled from "styled-components";


interface absentInfoProps {
  minusTime: number;
  absentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  calcAttendance: () => number;
  attendancePercentage: number;
  percentageCalc: () => number;
  minusPercentage: number;
  absent: number;
}



const DivBox = styled.div`
    width: ${({ theme }) => theme.boxColor.width};
    background: ${({ theme }) => theme.boxColor.background};
    border-radius: ${({ theme }) => theme.boxColor.borderRadius};
    padding: 5px;
    margin: 15px 0;
    line-height: 30px;
`;

export const AbsentInfo = (absentInfoProps: absentInfoProps) => {

  const { minusTime, absentChange, calcAttendance, attendancePercentage, percentageCalc, minusPercentage, absent } = absentInfoProps;

  return (
    <>

      <DivBox style={{ display: minusTime ? 'block' : 'none' }}>
        <CurrentAttendance absentChange={absentChange} calcAttendance={calcAttendance} attendancePercentage={attendancePercentage} />
        <MinusDay absentChange={absentChange} percentageCalc={percentageCalc} minusPercentage={minusPercentage} />
        <AbsentAllDay absentChange={absentChange} absent={absent} />
      </DivBox>

      <div style={{ display: minusTime ? 'block' : 'none' }}>
        < IncentiveMoney attendancePercentage={attendancePercentage} />
      </div>

    </>
  );
} 