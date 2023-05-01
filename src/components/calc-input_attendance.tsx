interface AttendanceProps {
  attendanceInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refAttendanceInput: React.RefObject<HTMLInputElement>;
}

export const InputAttendance = ({ attendanceInputChange, refAttendanceInput }: AttendanceProps) => {


  return (
    <>
      <p>이번 달 또는 전체 기간 중 학원 가는 횟수를 입력해주세요</p>
      <input className='input1' type="text" aria-label="input_number" defaultValue={''} placeholder='ex) 20' onChange={attendanceInputChange} ref={refAttendanceInput} />
    </>
  );
}