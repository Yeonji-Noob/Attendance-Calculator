import styled from 'styled-components';

interface AttendanceProps {
  attendanceInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refAttendanceInput: React.RefObject<HTMLInputElement>;
}

const InputBox = styled.div`

  display: ${({ theme }) => theme.inputBox.display};
  align-items: ${({ theme }) => theme.inputBox.alignItems};


  @media ${({ theme }) => theme.mobile} {
      flex-direction: column;
  }
`;

const InputText = styled.input`

  width: 50px; 
  height: ${({ theme }) => theme.inputText.height};
  background-color: ${({ theme }) => theme.inputText.backgroundColor};
  border: ${({ theme }) => theme.inputText.border}; 
  border-radius: ${({ theme }) => theme.inputText.borderRadius};
  padding: ${({ theme }) => theme.inputText.padding};
  margin-left: ${({ theme }) => theme.inputText.marginLeft};
  color: ${({ theme }) => theme.inputText.color};

`;



export const InputAttendance = ({ attendanceInputChange, refAttendanceInput }: AttendanceProps) => {


  return (
    <InputBox>
      <p>이번 달 학원 가는 횟수를 입력해주세요</p>
      <InputText type="text" aria-label="input_number" defaultValue={''} placeholder='ex) 20' onChange={attendanceInputChange} ref={refAttendanceInput} />
    </InputBox>
  );
}