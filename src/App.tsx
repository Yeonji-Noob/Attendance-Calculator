// public 폴더에 있는 것을 이렇게 불러올 수 있다!!!!!
// import viteLogo from '/vite.svg'
import { CalcAll } from "./components/calc_all"
import styled from "styled-components";

const BackgroundDiv = styled.div`

width: 100vw;
height: 100vh;
background: rgb(0,98,247);
background: radial-gradient(circle, rgba(0,98,247,1) 0%, #0535b9 51%, #272727 96%);
overflow: hidden;
font-family: 'SUIT Variable';
font-size: 12px;

`;

function App() {

  return (
    <>
      <BackgroundDiv>
        <CalcAll />
      </BackgroundDiv>
    </>
  )
}

export default App
