import { Attendance100Percent, OneDayPercentage, Attendance80Percent } from "./";
import styled from "styled-components";


interface AttendanceInfoProps {

  attendanceAcademy: number;
  numberCalc: () => number;
  percentageCalc: () => number;
  getMoney: () => number;

}


const FlexDiv = styled.div`

margin: 15px;
display: flex;
align-items: center;
justify-content: space-between;

`;


const DivBox = styled.div`

    width: ${({ theme }) => theme.boxColor.width};
    background: ${({ theme }) => theme.boxColor.background};
    border-radius: ${({ theme }) => theme.boxColor.borderRadius};
`;


export const AttendanceInfo = ({ attendanceAcademy, numberCalc, percentageCalc, getMoney }: AttendanceInfoProps) => {
  return (
    <DivBox style={{ display: attendanceAcademy ? 'block' : 'none' }}>
      <FlexDiv>
        <OneDayPercentage numberCalc={numberCalc} />
        <Attendance100Percent percentageCalc={percentageCalc} attendanceAcademy={attendanceAcademy} />
        <Attendance80Percent getMoney={getMoney} />
      </FlexDiv>
    </DivBox>
  );
}