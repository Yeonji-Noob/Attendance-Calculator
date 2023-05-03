import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

@font-face {
	font-family: 'SUIT Variable';
	font-weight: 100 900;
	src: local('SUIT Variable Regular'), url('./SUIT-Variable.woff2') format('woff2-variations');
}

`;

export default GlobalStyle;