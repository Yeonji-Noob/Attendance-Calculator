
interface MinusDayProps {
  absentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  percentageCalc: () => number;
  minusPercentage: number;
}

export const MinusDay = ({ absentChange, percentageCalc, minusPercentage }: MinusDayProps) => {
  return (
    <p onChange={absentChange} style={{ textAlign: 'center' }}>{percentageCalc()}% 중 <strong style={{ fontSize: '18px', fontWeight: '600' }}>-{minusPercentage}%</strong></p>
  );
}