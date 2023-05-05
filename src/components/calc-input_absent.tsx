import styled from "styled-components";

interface AbsentProps {
  absentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refAbsent: React.RefObject<HTMLInputElement>;
}


const InputBox = styled.div`
  display: ${({ theme }) => theme.inputBox.display};
  align-items: ${({ theme }) => theme.inputBox.alignItems};

  
 @media ${({ theme }) => theme.mobile} {
    flex-direction: column;
 }

`;


const InputText = styled.input`

  width: 170px; 
  height: ${({ theme }) => theme.inputText.height};
  background-color: ${({ theme }) => theme.inputText.backgroundColor};
  border: ${({ theme }) => theme.inputText.border}; 
  border-radius: ${({ theme }) => theme.inputText.borderRadius};
  padding: ${({ theme }) => theme.inputText.padding};
  margin-left: ${({ theme }) => theme.inputText.marginLeft};

`;


export const InputAbsent = ({ absentChange, refAbsent }: AbsentProps) => {


  return (
    <InputBox>
      <p>이번 달 결석 수를 입력해주세요</p>
      <InputText type="text" aria-label="input_number" defaultValue={''} placeholder='ex) 없으면 입력 x, 숫자만!' onChange={absentChange} ref={refAbsent} />
    </InputBox>
  );
}