// public 폴더에 있는 것을 이렇게 불러올 수 있다!!!!!
// import viteLogo from '/vite.svg'
import { CalcAll } from "./components/calc_all"
import styled from "styled-components";
import GlobalFont from "./styles/GlobalFont";
import GlobalStyles from "./styles/GlobalStyles";

const BackgroundDiv = styled.div`

width: 100vw;
height: 100vh;
background: rgb(0,98,247);
background: radial-gradient(circle, rgba(0,98,247,1) 0%, #0535b9 51%, #272727 96%);
overflow: hidden;

`;

function App() {

  return (
    <>
      <GlobalStyles />
      <GlobalFont />
      <BackgroundDiv>
        <CalcAll />
      </BackgroundDiv>
    </>
  )
}

export default App
