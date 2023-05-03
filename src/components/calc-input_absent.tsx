interface AbsentProps {
  absentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refAbsent: React.RefObject<HTMLInputElement>;
}


export const InputAbsent = ({ absentChange, refAbsent }: AbsentProps) => {


  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <p>이번 달 결석 수를 입력해주세요</p>
      <input type="text" aria-label="input_number" defaultValue={''} placeholder='ex) 없으면 입력 x, 숫자만!' onChange={absentChange} ref={refAbsent}
        style={{ width: '165px', height: '20px', backgroundColor: '#ffffff2b', border: 'solid 1px #000000', borderRadius: '5px', padding: '5px', marginLeft: '5px' }} />
    </div>
  );
}