import { useState, useRef } from 'react';
import { InputAttendance, InputMinus, InputAbsent, AttendanceInfo, AbsentInfo } from "./index"
import styled from 'styled-components';
import CalculateIcon from '@mui/icons-material/Calculate';


const StyleDiv = styled.div`
position: absolute;
width: 420px;
top: 50%;
left: 50%;
transform: translate(-50% ,-50%);
padding: 20px;
border-radius: 10px;
background: linear-gradient(160deg, #000000df 0%, #00326e 100%);
box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
-webkit-backdrop-filter: blur(9.6px);
border: 1px solid rgba(0, 31, 70, 0.51);
line-height: 40px;
font-size: 13px;
`;

const TitleText = styled.div`

display: flex;
align-items: center;
justify-content: center;


  & p {
    font-size: 19px;
    font-weight: 600;
    margin: 0 5px;
  }

`;



export const CalcAll = () => {

  //학원 가는 횟수 state
  const [attendanceAcademy, setAttendanceAcademy] = useState<number>(0);
  //조퇴,지각,외출 state
  const [minusTime, setMinusTime] = useState<number>(0);
  //결석 state
  const [, setAbsentCount] = useState<number>(0);


  // 학원 가는 횟수의 input 입력시 이벤트
  const attendanceInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setAttendanceAcademy(isNaN(value) ? 0 : value);
  };

  // 조퇴,지각,외출 input 입력시 이벤트
  const minusAttendance = (e: React.ChangeEvent<HTMLInputElement>) => {
    const minus = parseInt(e.target.value);
    setMinusTime(isNaN(minus) ? 0 : minus);
  }

  // 결석 input 입력시 이벤트
  const absentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const absent = parseInt(e.target.value);
    setAbsentCount(isNaN(absent) ? 0 : absent);
    setAbsentCount(absent);
  }


  //총 출석일 대비 1일의 %계산
  const numberCalc = (): number => Number((1 / attendanceAcademy * 100).toFixed(3));
  //총 출석일의 %계산 (당연한 거지만 100%로 고정되어 있음)
  const percentageCalc = (): number => Number((numberCalc() * attendanceAcademy).toFixed(0));
  //80%가 될 때 일수의 계산
  const getMoney = (): number => attendanceAcademy * (4 / 5);


  // value 값을 선택하기 위한 useRef
  const refAttendanceInput = useRef<HTMLInputElement>(null);
  const refMinusInput = useRef<HTMLInputElement>(null);
  const refAbsent = useRef<HTMLInputElement>(null);


  // 학원 가는 횟수 input에 직접 입력한 value
  const getAttendanceValue = (): number => {
    if (refAttendanceInput.current) {
      const value = refAttendanceInput.current.value;
      if (value !== '') {
        return parseInt(value);
      }
    }
    return 0;
  };

  // 조퇴,지각,외출 input에 직접 입력한 value
  const getMinusValue = (): number => {
    if (refMinusInput.current) {
      const value = refMinusInput.current.value;
      if (value !== '') {
        return parseInt(value);
      }
    }
    return 0;
  };


  //결석 input에 직접 입력한 value
  const getAbsentValue = (): number => {
    if (refAbsent.current) {
      const value = refAbsent.current.value;
      if (value !== '') {
        return parseInt(value);
      }
    }
    return 0;
  };



  //현 출석일수
  const calcAttendance = (): number => {
    const total = getAttendanceValue();
    const attendance = Number((getMinusValue() * 1 / 3).toFixed(1));

    return total - attendance - getAbsentValue();
  };



  // 나의 현재 출석퍼센트 (조퇴지각외출을 차감한!)
  const attendancePercentage = Number(((calcAttendance() / getAttendanceValue()) * 100).toFixed(3));

  // 전체출석% - 빠진날% 
  const minusPercentage = Number((percentageCalc() - attendancePercentage).toFixed(3));

  // 결석일수 계산
  const absent = Number((getMinusValue() * 1 / 3).toFixed(1)) + getAbsentValue();


  //념겨줄 props의 양이 많아서 묶음처리
  const absentInfoProps = {
    minusTime: minusTime,
    absentChange: absentChange,
    calcAttendance: calcAttendance,
    attendancePercentage: attendancePercentage,
    percentageCalc: percentageCalc,
    minusPercentage: minusPercentage,
    absent: absent,
  };




  return (
    <StyleDiv>
      <TitleText>
        <CalculateIcon />
        <p>출결 계산기</p>
        <CalculateIcon />
      </TitleText>
      <div>

        <InputAttendance attendanceInputChange={attendanceInputChange} refAttendanceInput={refAttendanceInput} />

        <InputMinus minusAttendance={minusAttendance} refMinusInput={refMinusInput} />

        <InputAbsent absentChange={absentChange} refAbsent={refAbsent} />

      </div>

      <AttendanceInfo attendanceAcademy={attendanceAcademy} numberCalc={numberCalc} percentageCalc={percentageCalc} getMoney={getMoney} />

      <AbsentInfo {...absentInfoProps} />

    </StyleDiv>

  );
}