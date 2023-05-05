// 타입 지정

interface Size {
  small: string;
  mobile: string;
  tablet: string;
}

interface BoxColor {
  width: string;
  background: string;
  borderRadius: string;
}

interface InputBox {
  display: string;
  alignItems: string;
}

interface InputText {
  height: string;
  backgroundColor: string;
  border: string;
  borderRadius: string;
  padding: string;
  marginLeft: string;
}

interface Theme {
  boxColor: BoxColor;
  small: string;
  mobile: string;
  tablet: string;
  inputBox: InputBox;
  inputText: InputText;
}

// 변수

const size: Size = {
  small: '300px',
  mobile: '430px',
  tablet: '600px',
};

const boxColor: BoxColor = {
  width: '100%',
  background: 'linear-gradient(160deg, #000000df 0%, #060B28 100%)',
  borderRadius: '10px',
};

const inputBox: InputBox = {
  display: 'flex',
  alignItems: 'center',
};

const inputText: InputText = {
  height: '25px',
  backgroundColor: '#ffffff2b',
  border: 'solid 1px #000000',
  borderRadius: '5px',
  padding: '5px',
  marginLeft: '5px',
};

// theme 객체에 감싸서 한꺼번에 반환
const theme: Theme = {
  boxColor,
  inputBox,
  inputText,
  small: `(max-width: ${size.small})`,
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-height: ${size.tablet})`,
};

export default theme;
