import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export default createGlobalStyle`
    ${reset}
    *, *::before, *::after{
        box-sizing: border-box;
    }
    html{
        font-size: 14px;
        background: rgb(0,98,247);
        background: radial-gradient(circle, rgba(0,98,247,1) 0%, #0535b9 51%, #272727 96%);
        overflow-x: hidden;
    }
    body{
        font-family: 'SUIT Variable'; // 폰트 설정
    }
    a{
        color: inherit;
        text-decoration: none;
    }
    ul{
        list-style: none;
    }
`;
