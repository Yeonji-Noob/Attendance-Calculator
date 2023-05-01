import { useState, useRef } from 'react';
import styled from 'styled-components';
import { IncentiveMoney, InputAttendance } from "./index"


const InputFlex = styled.div`

  display: flex;

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
  const numberCalc2 = (): number => Number((numberCalc() * attendanceAcademy).toFixed(0));
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
  const minusPercentage = Number((numberCalc2() - attendancePercentage).toFixed(3));

  // 결석일수 계산
  const absent = Number((getMinusValue() * 1 / 3).toFixed(1)) + getAbsentValue();




  return (
    <div style={{ marginLeft: '20px' }}>


      <div>

        <InputAttendance attendanceInputChange={attendanceInputChange} refAttendanceInput={refAttendanceInput} ></InputAttendance>

        <p>이번 달 조퇴/지각/외출의 총 합을 입력해주세요</p>

        <InputFlex>
          <input type="text" aria-label="input_number" defaultValue={''} placeholder='ex) 3' onChange={minusAttendance} ref={refMinusInput} />
        </InputFlex>


        <p>이번 달 결석 수를 입력해주세요</p>

        <InputFlex>
          <input type="text" aria-label="input_number" defaultValue={''} placeholder='ex) 없으면 입력 x, 숫자만!' onChange={absentChange} ref={refAbsent} />
        </InputFlex>

      </div>

      <div style={{ display: attendanceAcademy ? 'block' : 'none' }}>
        <p>1일 = {numberCalc()}% 입니다</p>
        <p>{attendanceAcademy}일 = {numberCalc2()}% 입니다</p>
        <p>총 80%가 되려면 {getMoney()}일을 출석해야 합니다.</p>
      </div>

      <div style={{ display: minusTime ? 'block' : 'none' }} >
        <p onChange={absentChange}>현재 출석일수는 {calcAttendance()}일 ({attendancePercentage}%) 입니다</p>
        <p onChange={absentChange}>{numberCalc2()}% 중 {minusPercentage}% 차감되었습니다.</p>
        <p onChange={absentChange}>결석일수는 총 {absent}일 이에요.</p>
        < IncentiveMoney attendancePercentage={attendancePercentage} />
      </div>

    </div>

  );
}