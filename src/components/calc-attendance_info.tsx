import styled from "styled-components";
import { Attendance100Percent, OneDayPercentage, Attendance80Percent } from "./";

const FlexDiv = styled.div`

margin: 20px 30px;
display: flex;
align-items: center;
justify-content: space-between;

`;

interface AttendanceInfoProps {

  attendanceAcademy: number;
  numberCalc: () => number;
  percentageCalc: () => number;
  getMoney: () => number;

}

export const AttendanceInfo = ({ attendanceAcademy, numberCalc, percentageCalc, getMoney }: AttendanceInfoProps) => {
  return (
    <div style={{
      display: attendanceAcademy ? 'block' : 'none',
      width: '100%',
      background: 'linear-gradient(160deg, #000000df 0%, #060B28 100%)',
      borderRadius: '10px',
      padding: '1px',
    }}>

      <FlexDiv>
        <OneDayPercentage numberCalc={numberCalc} />
        <Attendance100Percent percentageCalc={percentageCalc} attendanceAcademy={attendanceAcademy} />
        <Attendance80Percent getMoney={getMoney} />
      </FlexDiv>


    </div>
  );
}