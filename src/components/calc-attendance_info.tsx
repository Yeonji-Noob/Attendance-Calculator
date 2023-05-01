interface AttendanceInfoProps {

  attendanceAcademy: number;
  numberCalc: () => number;
  percentageCalc: () => number;
  getMoney: () => number;

}

export const AttendanceInfo = ({ attendanceAcademy, numberCalc, percentageCalc, getMoney }: AttendanceInfoProps) => {
  return (
    <div style={{ display: attendanceAcademy ? 'block' : 'none' }}>
      <p>1일 = {numberCalc()}% 입니다</p>
      <p>{attendanceAcademy}일 = {percentageCalc()}% 입니다</p>
      <p>총 80%가 되려면 {getMoney()}일을 출석해야 합니다.</p>
    </div>
  );
}