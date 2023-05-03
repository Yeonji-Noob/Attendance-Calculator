interface MinusProps {
  minusAttendance: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refMinusInput: React.RefObject<HTMLInputElement>;
}

export const InputMinus = ({ minusAttendance, refMinusInput }: MinusProps) => {


  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <p>이번 달 조퇴/지각/외출의 총 합을 입력해주세요</p>
      <input type="text" aria-label="input_number" defaultValue={''} placeholder='ex) 3' onChange={minusAttendance} ref={refMinusInput}
        style={{ width: '50px', height: '20px', backgroundColor: '#ffffff2b', border: 'solid 1px #000000', borderRadius: '5px', padding: '5px', marginLeft: '5px' }} />
    </div>
  );
}