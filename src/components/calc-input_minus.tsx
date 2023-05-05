import styled from "styled-components";

interface MinusProps {
  minusAttendance: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refMinusInput: React.RefObject<HTMLInputElement>;
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

export const InputMinus = ({ minusAttendance, refMinusInput }: MinusProps) => {


  return (
    <InputBox>
      <p>이번 달 조퇴/지각/외출의 총 합을 입력해주세요</p>
      <InputText type="text" aria-label="input_number" defaultValue={''} placeholder='ex) 3' onChange={minusAttendance} ref={refMinusInput} />
    </InputBox>
  );
}