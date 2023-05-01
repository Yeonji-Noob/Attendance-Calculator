interface MinusProps {
  minusAttendance: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refMinusInput: React.RefObject<HTMLInputElement>;
}

export const InputMinus = ({ minusAttendance, refMinusInput }: MinusProps) => {


  return (
    <>
      <p>이번 달 조퇴/지각/외출의 총 합을 입력해주세요</p>
      <input type="text" aria-label="input_number" defaultValue={''} placeholder='ex) 3' onChange={minusAttendance} ref={refMinusInput} />
    </>
  );
}