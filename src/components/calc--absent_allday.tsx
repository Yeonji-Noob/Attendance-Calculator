
interface AbsentAllDayProps {
  absentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  absent: number;
}

export const AbsentAllDay = ({ absentChange, absent }: AbsentAllDayProps) => {
  return (
    <p onChange={absentChange} style={{ textAlign: 'center' }}>결석일수는 총 <strong style={{ fontSize: '18px', fontWeight: '600' }}>{absent}일</strong> 이에요.</p>
  );
}