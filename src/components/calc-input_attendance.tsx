interface AttendanceProps {
  attendanceInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refAttendanceInput: React.RefObject<HTMLInputElement>;
}

export const InputAttendance = ({ attendanceInputChange, refAttendanceInput }: AttendanceProps) => {


  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <p>이번 달 또는 전체 기간 중 학원 가는 횟수를 입력해주세요</p>
      <input className='input1' type="text" aria-label="input_number" defaultValue={''} placeholder='ex) 20' onChange={attendanceInputChange} ref={refAttendanceInput}
        style={{ width: '50px', height: '20px', backgroundColor: '#ffffff2b', border: 'solid 1px #000000', borderRadius: '5px', padding: '5px', marginLeft: '5px' }}
      />
    </div>
  );
}